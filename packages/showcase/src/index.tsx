import { Viewport, Menu, Button } from "@flow-ui/core";
import Icon from "@flow-ui/core/content/Icon";
import { A, H3, T2, H1, T1 } from "@flow-ui/core/content/Typography";
import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import * as themesCore from '@flow-ui/core/misc/themes';
import * as themesLab from '@flow-ui/lab/misc/themes';
import * as React from "react";
import * as ReactDOM from "react-dom";
import ShowcaseMenu from './components/Menu';
import CodeEditor from './components/CodeEditor';
import ThemeSwitch from "./components/ThemeSwitch";
import core, { Case } from './core';
import UIDocumentation from "./components/UIDocumentation";

export const themes = { ...themesCore, ...themesLab }

declare global {
	interface Window {
		setTheme: (theme: string) => void
		currentTheme: string
	}
}

interface State {
	caseId: string | null
	caseObject: Case | null
	caseIndex: number
	showGrid: boolean
	fullscreen: boolean
	context: any
	currentTheme: string
}

class Showcase extends React.Component<{}, State>  {

	state: Readonly<State> = {
		caseId: null,
		caseObject: null,
		caseIndex: 0,
		showGrid: localStorage.getItem('case_grid') ? true : false,
		fullscreen: false,
		context: {},
		currentTheme: localStorage.getItem('theme') || 'light',
	}

	constructor(props: any) {
		super(props);
		this.playgroundModeHandle = this.playgroundModeHandle.bind(this);
		this.setCase = this.setCase.bind(this);
		this.setContext = this.setContext.bind(this);
	}

	playgroundModeHandle(event) {
		if (event.keyCode === 80 && event.altKey) {
			const mode = localStorage.getItem("mode") || "default";
			localStorage.setItem("mode", mode === "default" ? "playground" : "default")
		}
	}

	UNSAFE_componentWillMount() {

		core.init({});

		document.addEventListener('keyup', this.playgroundModeHandle);
		const path = window.location.hash.slice(1)
		if (path) {
			const currentCase = core.getCaseByUrl(path)
			if (currentCase) {
				this.setCase(currentCase.id)
				return;
			}
		}
		this.setCase(
			core.getFirstCase().id
		)
	};

	setContext(nextContext: any) {
		this.setState({
			context: nextContext
		})
	}

	setCase(caseId: string) {

		const caseObject: Case = core.getCaseById(caseId);

		window.scrollTo(0, 0);
		window.location.hash = `/${caseObject.url}`;

		this.setState({
			caseId,
			caseObject,
			caseIndex: 0,
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.playgroundModeHandle);
	}

	render() {

		const { caseObject, context } = this.state;
		const Context = core.getReactContext;

		window.setTheme = (currentTheme) => {
			localStorage.setItem('theme', currentTheme)
			this.setState({ currentTheme })
		}
		window.currentTheme = this.state.currentTheme

		const CustomPageContent = (caseObject && caseObject.default) ? caseObject.default : null;

		return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Viewport theme={themes[this.state.currentTheme]}>
					<Flexbox alignItems="flex-start">
						<Block flex={1} css={{ 
							padding: '2rem 4rem', 
							position: (caseObject && caseObject.sticky) ? "block" : "sticky", 
							top: 0, 
							zIndex:1 
						}}>
							{caseObject && caseObject.title && (
								<H1
									css={{
										userSelect: "none",
										fontSize: "2.5rem",
										fontWeight: 800
									}}
									children={caseObject.title}
								/>
							)}
							{caseObject && caseObject.subtitle && (
								<T1
									color={c => c.light.css()}
									css={{ userSelect: "none" }}
									pt={"0.25rem"}
									children={caseObject.subtitle}
								/>
							)}
							{caseObject && caseObject.cases && (
								<React.Fragment>
									<Flexbox mt={'1rem'} mb={'0.25rem'} alignItems="center">
										{caseObject.cases.map((c, caseIndex) => (
											<Button
												key={caseIndex}
												size="small"
												mr={'0.25rem'}
												decoration={'text'}
												textColor={c => caseIndex == this.state.caseIndex 
													? c.primary.css()
													: c.hardest.css()}
												children={c.label}
												onClick={() => this.setState({ caseIndex })}
											/>
										))}
										<Block flex={1} />
										<Icon
											p="0.75rem"
											pr="0.5rem"
											size="1.25rem"
											color={this.state.showGrid
												? c => c.primary.css()
												: c => c.onSurface.css()
											}
											onClick={() => {
												localStorage.setItem('case_grid', !this.state.showGrid ? 'true' : 'false')
												this.setState({
													showGrid: !this.state.showGrid
												})
											}}
											type={t => t.outline.grid}
										/>
										<Icon
											p="0.75rem"
											pr="0.5rem"
											size="1.25rem"
											color={c => c.onSurface.css()}
											onClick={() => {
												this.setState({
													fullscreen: true
												})
											}}
											type={t => t.outline.expand}
										/>
									</Flexbox>
									<CodeEditor
										caseObject={caseObject}
										caseIndex={this.state.caseIndex}
										showGrid={this.state.showGrid}
										fullscreen={this.state.fullscreen}
										onExitFullscreen={() => {
											this.setState({
												fullscreen: false
											})
										}}
									/>
								</React.Fragment>
							)}

							{caseObject && caseObject.ns && (
								<UIDocumentation
									ns={caseObject.ns}
								/>
							)}
							{CustomPageContent && <CustomPageContent />}
						</Block>
						<Block>
							<Flexbox pt="1rem" pl="1.25rem" pr="1rem">
								<H3
									css={{ cursor: "default" }}
									weight={800}
									color={c => c.primary.css()}
									children={(core.config && core.config.title) || "Showcase"}
								/>
								<Block flex={1} />
								{(core.config && core.config.giturl) && (
									<T2>
										<A target="_blank" href={core.config.giturl}>
											<Icon size={"1.5rem"} type={t => t.outline.github} />
										</A>
									</T2>
								)}
							</Flexbox>
							<ThemeSwitch />
							<ShowcaseMenu
								current={this.state.caseId}
								cases={core.cases}
								onChange={this.setCase}
							/>
						</Block>
					</Flexbox>
				</Viewport>
			</Context.Provider>
		)
	}
}

ReactDOM.render(<Showcase />, document.getElementById('showcase'));