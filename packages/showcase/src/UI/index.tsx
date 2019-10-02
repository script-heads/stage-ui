import * as React from "react";
import core from '../core';
import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import Spinner from '@flow-ui/core/content/Spinner';
import { Menu, Panel } from './components';

import { PanelRenderProps, ToolRenderItem, PanelRenderItem } from "../../types";
import { A, H4, T2 } from "@flow-ui/core/content/Typography";
import Icon from "@flow-ui/core/content/Icon";

interface State {
	CurrentCase: React.SFC<{}> | null
	isMenuOpen: boolean,
	panelItems: {
		id: string
		name: string,
		render: React.SFC<{}>
	}[],
	panelTools: {
		id: string
		render: React.SFC<{}>
	}[],
	Wrapper: typeof React.Component | null,
	wrapperProps: any,
	context: any
}

class UI extends React.Component<{}, State>  {

	state: Readonly<State> = {
		CurrentCase: null,
		isMenuOpen: false,
		panelItems: [],
		panelTools: [],
		Wrapper: null,
		wrapperProps: {},
		context: {}
	}

	constructor(props: any) {
		super(props);
		this.handleMouseClick = this.handleMouseClick.bind(this);
		this.playgroundModeHandle = this.playgroundModeHandle.bind(this);
		this.setCase = this.setCase.bind(this);
		this.addPanel = this.addPanel.bind(this);
		this.setWrapper = this.setWrapper.bind(this);
		this.setContext = this.setContext.bind(this);
	}

	playgroundModeHandle(event) {
		if (event.keyCode === 80 && event.altKey) {
			const mode = localStorage.getItem("mode") || "default";
			localStorage.setItem("mode", mode === "default" ? "playground" : "default")
			let currentCase = localStorage.getItem('currentCaseID');
			if (currentCase) {
				this.setCase(currentCase)
			}
		}
	}

	UNSAFE_componentWillMount() {
		core.init({
			setWrapper: this.setWrapper,
			addPanel: this.addPanel,
			openMenu: () => {
				this.setState({ isMenuOpen: true });
			},
		});
		document.addEventListener('mousedown', this.handleMouseClick);
		document.addEventListener('keyup', this.playgroundModeHandle);
		const savedCaseID = localStorage.getItem('currentCaseID')
		if (savedCaseID) {
			this.setCase(savedCaseID)
		}
	};

	private handleMouseClick = (event: MouseEvent) => {
		var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

		if ((!isMac && event.altKey) || (isMac && event.metaKey)) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	setContext(nextContext: any) {
		this.setState({
			context: nextContext
		})
	}

	addPanel(add: PanelRenderProps) {
		if (add.item) {
			add.item = Object.assign(add.item, { id: add.item.id || core.getId('panel') });
		}
		if (add.tool) {
			add.tool = Object.assign(add.tool, { id: add.tool.id || core.getId('panel') });
		}

		this.setState(state => {
			const newState: any = {
				...state,
				panelTools: state.panelTools,
				panelItems: state.panelItems
			};

			if (state.panelTools.findIndex(item => item.id === add.item!.id) >= 0) {
				newState.panelTools = newState.panelTools.map((tool: ToolRenderItem) => {
					if (tool.id === add.tool!.id) {
						return add.tool;
					}
					return tool;
				})
			} else {
				newState.panelTools = add.tool ? [...state.panelTools, add.tool] : state.panelTools;
			}

			if (state.panelItems.findIndex(item => item.id === add.item!.id) >= 0) {
				newState.panelItems = newState.panelItems.map((item: PanelRenderItem) => {
					if (item.id === add.item!.id) {
						return add.item;
					}
					return item;
				})
			} else {
				newState.panelItems = add.item ? [...state.panelItems, add.item] : state.panelItems;
			}
			return newState;
		});
	}

	setWrapper(Wrapper: typeof React.Component) {
		this.setState({
			Wrapper: Wrapper
		})
	}
	
	setCase(currentCaseID: string) {

		const Case = core.getCaseById(currentCaseID);

		this.setState({
			CurrentCase: null,
			isMenuOpen: false
		});
		
		let currentCaseNode = Case.node;

		const mode = localStorage.getItem('mode');
		if (mode === "playground") {
			if (Case.playground) {
				currentCaseNode = Case.playground
			} else {
				currentCaseNode = () => {
					return (
						<Block m="2rem">There is no playground export for this case.</Block>
					)
				}
			}
		}
		setTimeout(() => {
			this.setState({
				CurrentCase: currentCaseNode,
				isMenuOpen: false
			});
			localStorage.setItem('currentCaseID', currentCaseID);
		})
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleMouseClick);
		document.removeEventListener('keydown', this.playgroundModeHandle);
	}

	render() {

		const { CurrentCase, panelItems, panelTools, Wrapper, context } = this.state;
		const Context = core.getReactContext;

		const Wrap = Wrapper || ((props: any) => props.children)

		return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Wrap>
					<Block>
						<Flexbox css={{
							padding: '1rem',
							background: "#222",
							color: "#fff"
						}}>
							<H4>{(core.config && core.config.title) || "Showcase"}</H4>
							<Block flex={1}/>
							{(core.config && core.config.giturl) && (
								<T2>
									<A target="_blank" href={core.config.giturl}>
										<Icon size={"1.5rem"} type={t => t.outline.github} />
									</A>
								</T2>
							)}

						</Flexbox>
						<Flexbox alignItems="flex-start">
							<Menu cases={core.cases} onChange={this.setCase} />
							{
								CurrentCase && (
									<Block flex={1} css={{
										position: "sticky",
										top: 0
									}}>
										<CurrentCase />
									</Block>
								)
							}
							{!CurrentCase && <Spinner m="2rem" />}
							{core.config.hidePanel !== true && (
								<Panel items={panelItems} tools={panelTools} />
							)}
						</Flexbox>
					</Block>
				</Wrap>

			</Context.Provider>
		)
	}
}

export default UI;