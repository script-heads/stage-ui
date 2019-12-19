import ReactDOM from 'react-dom'
import React, { useReducer, Fragment, useMemo } from 'react'
import CodeEditor from './components/CodeEditor'
import Sidebar from './components/Sidebar'
import ThemeSwitcher from './components/ThemeSwitcher'
import API from './components/API'
import core, { Page } from './core'
import { 
	Button, 
	Viewport,
	Anchor, 
	Icon, 
	Block, 
	Flexbox, 
	Header, 
	Display } from '@flow-ui/core'

interface State {
	test: boolean
	pageId: string
	page: Page | null
	caseIndex: number
	showGrid: boolean
	fullscreen: boolean
	shared: Object
	currentTheme: string
}

type Reducer = (state: State, action: Partial<State>) => State

const Documaker = () => {
	
	const [state, dispatch] = useReducer<Reducer>(
		(state, action) => ({...state, ...action}), 
		{
			test: false,
			pageId: 'index',
			page: null,
			caseIndex: 0,
			showGrid: localStorage.getItem('case_grid') ? true : false,
			fullscreen: false,
			shared: {},
			currentTheme: localStorage.getItem('theme') || 'light',
		}
	)

	const {page} = state
	const {Context, config, pages} = core
	const {name, themes, index: Index, git} = config	
	const CustomPageContent = (page && page.default) ? page.default : null

	useMemo(() => {
		const path = window.location.pathname.slice(1)
		const currentPage = core.getPageByUrl('/' + path)
		openPage(currentPage)
	},[])
	
	window.onpopstate = () => {
		const page = core.getPageById(history.state?.id)
		page ? setPage(page) : setIndex()
	}

	function openPage(page?: Page) {
		if (page) {
			history.pushState(
				{ id: page.id },
				page.title,
				page.url
			)
			setPage(page)
		} else {
			setIndex()
		}
	}

	function setPage(page: Page) {
		document.title = 
			page.title 
			+ ' - '
			+ name

		dispatch({
			pageId: page.id,
			page,
			caseIndex: 0,
		})
	}

	function setIndex() {
		document.title = name

		dispatch({
			pageId: 'index',
			page: null,
			caseIndex: 0,
		})
	}

	function setContext(nextContext: Object) {
		dispatch({ shared: nextContext })
	}

	function setTheme(currentTheme: string) {
		localStorage.setItem('theme', currentTheme)
		dispatch({ currentTheme })
	}

	return (
		<Context.Provider value={{ ...state.shared, setContext: setContext }}>
			<Viewport theme={themes[state.currentTheme]}>
				{state.pageId === 'index' && Index
					? <Index open={() => openPage(core.getFirstPage())} />
					: state.test 
						? (page && page.test
							? <page.test /> 
							: null
						) 
						: (
							<Fragment>
								<Flexbox alignItems="center" m="1.5rem" mb="1rem">
									<Header
										size={3} 
										flex={1}
										children={name || 'Documaker'}
									/>
									<ThemeSwitcher 
										themes={themes}
										currentTheme={state.currentTheme}
										setTheme={setTheme} 
									/>
									{git && (
										<Anchor size={2} target="_blank" href={git} ml="1rem">
											<Icon size="1.5rem" type={t => t.outline.github}/>
										</Anchor>
									)}
								</Flexbox>
								<Flexbox>
									<Sidebar
										current={state.pageId}
										pages={pages}
										onChange={(pageId) => openPage(core.getPageById(pageId))}
									/>
									<Block px="6rem" flex={1} css={{zIndex:1 }}>
										{page && page.title && (
											<Display
												size={4}
												weight="bold"
												children={page.title}
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
															localStorage.setItem(
																'case_grid', 
																!state.showGrid 
																	? 'true' 
																	: 'false'
															)
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
												config={config}
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

core.init()

ReactDOM.render(
	<Documaker/>, 
	document.getElementById('documaker')
)