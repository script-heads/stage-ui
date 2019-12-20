import ReactDOM from 'react-dom'
import React, { Fragment, useState, useMemo } from 'react'
import { Viewport,Flexbox } from '@flow-ui/core'
import core, { PageType } from './core'
import Sidebar from './components/Sidebar'
import Menu from './components/Menu'
import Page from './components/Page'

core.init()

const Documaker = () => {

	const [currentThemeName, setTheme] = useState<string|null>(null)
	const [contextData, setContext] = useState<Object>({})
	const [currentPage, setCurrentPage] = useState<PageType|null>(null)

	const {Context, config, pages} = core
	const Index = config.index
	const locationPath = '/' + window.location.pathname.slice(1)

	function setPage(pageURL?: string) {
		let nextPage = core.getPageByUrl(pageURL || history.state?.url)

		if (!nextPage && !Index) {
			nextPage = core.getFirstPage()
		}

		const title = nextPage?.title 
			? nextPage?.title + ' - ' + config.name
			: config.name

		document.title = title
		setCurrentPage(nextPage)
		return title
	}

	useMemo(() => {		
		setPage(locationPath)
	},[locationPath])
	
	window.onpopstate = () => setPage()

	function historyPush(pageURL: string) {
		history.pushState(
			{ url: pageURL },
			setPage(pageURL),
			pageURL
		)
	}

	function Content () {
		if (!currentPage) {
			return (
				<Index open={() => historyPush(core.getFirstPage().url)} />
			)
		}
	
		return (
			<Fragment>
				<Menu
					themes={config.themes}
					currentTheme={currentThemeName}
					setTheme={setTheme}
					name={config.name || 'Documaker'}
					git={config.git} 
					setIndex={() => historyPush('/')} 
				/>
				<Flexbox>
					<Sidebar
						currentPage={currentPage}
						pages={pages}
						onChange={(pageURL) => historyPush(pageURL)}
					/>
					<Page
						currentPage={currentPage}
						types={config.pages.types}
						separatedTypes={config.pages.separatedTypes}
					/>
				</Flexbox>
			</Fragment>
		)
	}

	return (
		<Context.Provider value={{ ...contextData, setContext }}>
			<Viewport theme={config.themes?.[currentThemeName]}>
				<Content/>
			</Viewport>
		</Context.Provider>
	)
}

ReactDOM.render(
	<Documaker/>, 
	document.getElementById('documaker')
)