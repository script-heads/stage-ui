import 'babel-polyfill'

import ReactDOM from 'react-dom'
import React, { useEffect, useReducer, Fragment } from 'react'
import CodeEditor from './components/CodeEditor'
import Sidebar from './components/Sidebar'
import ThemeSwitcher from './components/ThemeSwitcher'
import API from './components/API'
import core, { Page } from './core'
import { Button, Viewport, Text, Anchor, Icon, Block, Flexbox, Header, Display } from '@flow-ui/core'

declare global {
	interface Window {
		setTheme: (theme: string) => void
		currentTheme: string
	}
}

interface State {
	test: boolean
	promo: boolean
	pageId: string | null
	page: Page | null
	caseIndex: number
	showGrid: boolean
	fullscreen: boolean
	context: Object
	currentTheme: string
}

type Reducer = (state: State, action: Partial<State>) => State

const Documaker = () => {
	
	const [state, dispatch] = useReducer<Reducer>(
		(state, action) => ({...state, ...action}), 
		{
			test: false,
			promo: true,
			pageId: null,
			page: null,
			caseIndex: 0,
			showGrid: localStorage.getItem('case_grid') ? true : false,
			fullscreen: false,
			context: {},
			currentTheme: localStorage.getItem('theme') || 'light',
		}
	)

	useEffect(() => {
		core.init()

		let path = window.location.hash.slice(1)
	
		if (path) {
			const currentPage = core.getPageByUrl(path)
			if (currentPage) {
				setPage(currentPage)
				return
			}
		}
		setPage(core.getFirstPage())
	}, [])
	
	const {page, context} = state
	const themes = core.config.themes
	const Promo = core.config.promo
	const Context = core.getReactContext	
	const CustomPageContent = (page && page.default) ? page.default : null

	function setContext(nextContext: Object) {
		dispatch({ context: nextContext })
	}

	function setPage(page: Page) {
		window.scrollTo(0, 0)
		window.location.hash = `/${page.url}`

		dispatch({
			pageId: page.id,
			page,
			caseIndex: 0,
		})
	}

	window.setTheme = (currentTheme) => {
		localStorage.setItem('theme', currentTheme)
		dispatch({ currentTheme })
	}
	
	window.currentTheme = state.currentTheme
		
	return (
		<Context.Provider value={{ ...context, setContext: setContext }}>
			<Viewport theme={themes[state.currentTheme]}>
				{state.promo && Promo
					? <Promo open={() => dispatch({promo: false})} />
					: state.test 
						? ( (page && page.test) 
								? <page.test /> 
								: null
						) 
						: (
							<Fragment>
								<Flexbox alignItems="center" m="1.5rem" mb="1rem">
									<Header
										size={3} 
										flex={1}
										children={(core.config && core.config.title) || 'documaker'}
									/>
									<ThemeSwitcher themes={themes} />
									{(core.config && core.config.giturl) && (
										<Anchor size={2} target="_blank" href={core.config.giturl} ml="1rem">
											<Icon size="1.5rem" type={t => t.outline.github}/>
										</Anchor>
									)}
								</Flexbox>
								<Flexbox>
									<Sidebar
										current={state.pageId}
										pages={core.pages}
										config={core.config}
										onChange={(pageId) => setPage(core.getPageById(pageId))}
									/>
									<Block px="6rem" flex={1} css={{zIndex:1 }}>
										{page && page.title && (
											<Display
												size={4}
												weight="bold"
												children={page.title}
											/>
										)}
										{page && page.subtitle && (
											<Text
												color={c => c.light.css()}
												css={{ userSelect: 'none' }}
												pt="0.25rem"
												children={page.subtitle}
											/>
										)}
										{page && page.cases && page.cases.length > 0 && (
											<Fragment>
												<Flexbox mt="1rem" mb="0.25rem" alignItems="center">
													{page.cases.map((c, caseIndex) => (
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
														color={c => state.showGrid
															? c.primary.css()
															: c.onSurface.css()
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
													caseObject={page}
													caseIndex={state.caseIndex}
													showGrid={state.showGrid}
													fullscreen={state.fullscreen}
													onExitFullscreen={() => {
														dispatch({
															fullscreen: false
														})
													}}
												/>
											</Fragment>
										)}
										{page && page.ns && (
											<API
												name={page.ns}
												config={core.config}
											/>
										)}
										{CustomPageContent && <CustomPageContent />}
									</Block>
								</Flexbox>
							</Fragment>
						)
				}
			</Viewport>
		</Context.Provider>
	)
}

ReactDOM.render(<Documaker/>, document.getElementById('documaker'))