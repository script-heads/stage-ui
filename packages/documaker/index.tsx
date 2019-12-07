import 'babel-polyfill'

import { Button, Viewport } from '@flow-ui/core'
import Icon from '@flow-ui/core/content/Icon'
import { A, H1, H3, T1, T2 } from '@flow-ui/core'
import Block from '@flow-ui/core/layout/Block'
import Flexbox from '@flow-ui/core/layout/Flexbox'
import * as themesCore from '@flow-ui/core/misc/themes'
import * as themesLab from '@flow-ui/lab/misc/themes'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CodeEditor from './components/CodeEditor'
import Menu from './components/Menu'
import ThemeSwitch from './components/ThemeSwitch'
import UIDocumentation from './components/UIDocumentation'
import core, { Case } from './core'
import { ScrollView } from '@flow-ui/lab'
import { useEffect, useReducer, useRef } from 'react'

export const themes = { ...themesCore, ...themesLab }

declare global {
	interface Window {
		setTheme: (theme: string) => void
		currentTheme: string
	}
}

interface State {
	test: boolean
	caseId: string | null
	caseObject: Case | null
	caseIndex: number
	showGrid: boolean
	fullscreen: boolean
	context: any
	currentTheme: string
}

const Documaker = () => {
	
	const [state, dispatch] = useReducer(
		(state, action) => {
			return {...state, ...action}
		}, 
		{
			test: false,
			caseId: null,
			caseObject: null,
			caseIndex: 0,
			showGrid: localStorage.getItem('case_grid') ? true : false,
			fullscreen: false,
			context: {},
			currentTheme: localStorage.getItem('theme') || 'light',
		}
	)

	useEffect(() => {
		core.init({})

		let path = window.location.hash.slice(1)
	
		if (path) {
			const currentCase = core.getCaseByUrl(path)
			if (currentCase) {
				setCase(currentCase.id)
				return
			}
		}

		setCase(
			core.getFirstCase().id
		)
	}, [])
	
	let mainViewRef = null
	const {caseObject, context} = state
	const Context = core.getReactContext	
	const CustomPageContent = (caseObject && caseObject.default) ? caseObject.default : null

	function setContext(nextContext: any) {
		dispatch({
			context: nextContext
		})
	}

	function setCase(caseId: string) {

		const caseObject: Case = core.getCaseById(caseId)

		window.scrollTo(0, 0)
		window.location.hash = `/${caseObject.url}`

		dispatch({
			caseId,
			caseObject,
			caseIndex: 0,
		});

		(mainViewRef as any).scrollTop()
	}

	window.setTheme = (currentTheme) => {
		localStorage.setItem('theme', currentTheme)
		dispatch({ currentTheme })
	}
	
	window.currentTheme = state.currentTheme
		
	return (
		<Context.Provider value={{ ...context, setContext: setContext }}>
			<Viewport theme={themes[state.currentTheme]}>
				{state.test ? (
					(caseObject && caseObject.test) ? <caseObject.test /> : null
				) : (
					<Flexbox alignItems="flex-start">
					<ScrollView flex={1} size="xsmall" h="100vh" yBarPosition="left" ref={ref => mainViewRef = ref}>
						<Block css={{padding: '2rem 4rem', zIndex:1 }}>
						{caseObject && caseObject.title && (
							<H1
								css={{
									userSelect: 'none',
									fontSize: '2.5rem',
									fontWeight: 800
								}}
								children={caseObject.title}
							/>
						)}
						{caseObject && caseObject.subtitle && (
							<T1
								color={c => c.light.css()}
								css={{ userSelect: 'none' }}
								pt={'0.25rem'}
								children={caseObject.subtitle}
							/>
						)}
						{caseObject && caseObject.cases && caseObject.cases.length > 0 && (
							<React.Fragment>
								<Flexbox mt={'1rem'} mb={'0.25rem'} alignItems="center">
									{caseObject.cases.map((c, caseIndex) => (
										<Button
											key={caseIndex}
											size="small"
											mr={'0.25rem'}
											decoration={'text'}
											textColor={c => caseIndex == state.caseIndex 
												? c.primary.css()
												: c.hardest.css()}
											children={c.label}
											onClick={() => dispatch({ caseIndex })}
										/>
									))}
									<Block flex={1} />
									<Icon
										p="0.75rem"
										pr="0.5rem"
										size="1.25rem"
										color={state.showGrid
											? c => c.primary.css()
											: c => c.onSurface.css()
										}
										onClick={() => {
											localStorage.setItem('case_grid', !state.showGrid ? 'true' : 'false')
											dispatch({
												showGrid: !state.showGrid
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
											dispatch({
												fullscreen: true
											})
										}}
										type={t => t.outline.expand}
									/>
								</Flexbox>
								<CodeEditor
									caseObject={caseObject}
									caseIndex={state.caseIndex}
									showGrid={state.showGrid}
									fullscreen={state.fullscreen}
									onExitFullscreen={() => {
										dispatch({
											fullscreen: false
										})
									}}
								/>
							</React.Fragment>
						)}

						{caseObject && caseObject.ns && (
							<UIDocumentation
								ns={caseObject.ns}
								config={core.config}
							/>
						)}
						{CustomPageContent && <CustomPageContent />}
						</Block>
					</ScrollView>
					<ScrollView h="100vh" size="xsmall">
						<Flexbox pt="1rem" pl="1.25rem" pr="1rem">
							<H3
								css={{ cursor: 'default' }}
								weight={800}
								color={c => c.primary.css()}
								children={(core.config && core.config.title) || 'documaker'}
							/>
							<Block flex={1} />
							{(core.config && core.config.giturl) && (
								<T2>
									<A target="_blank" href={core.config.giturl}>
										<Icon size={'1.5rem'} type={t => t.outline.github} />
									</A>
								</T2>
							)}
						</Flexbox>
						<ThemeSwitch />
						<Menu
							current={state.caseId}
							cases={core.cases}
							onChange={setCase}
						/>
					</ScrollView>
				</Flexbox>
				)}
			</Viewport>
		</Context.Provider>
	)
}

ReactDOM.render(<Documaker />, document.getElementById('documaker'))