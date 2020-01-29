import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import React, { Fragment, useState, useMemo } from 'react'
import { Viewport, Flexbox, Header, Text } from '@flow-ui/core'
import core, { PageType } from './core'
import Sidebar from './components/Sidebar'
import PageHeader from './components/PageHeader'
import Page from './components/Page'
import Page404 from './components/Page404'
import PageEmpty from './components/PageEmpty'

import WhaleTypes from '@flow-ui/whale/types'
import * as flowThemes from '@flow-ui/core/misc/themes/index'
import Architect from '@flow-ui/architect'

declare global {
	interface Window {
		breakpoints: number[]
	}
}

window.breakpoints = [960, 768]

core.init()

const FlowViewport = (props: { children: any, currentTheme: WhaleTypes.Theme }) => (
	<Viewport theme={props.currentTheme}>
		<Global
			styles={{
				'html,body,#documaker': {
					minHeight: '100vh',
					overscrollBehavior: 'none'
				}
			}}
		/>
		{props.children}
	</Viewport>
)

const Documaker = () => {

	const { config, pages } = core
	const themes = Object.assign(flowThemes, config.themes)
	const locationPath = '/' + window.location.pathname.slice(1)
	
	let defaultTheme = Object.values(themes)[0]
	const currentSavedTheme = localStorage.getItem('current_theme')
	if (currentSavedTheme) {
		if (themes[currentSavedTheme]) {
			defaultTheme = themes[currentSavedTheme]
		}
	}

	const [currentTheme, setCurrentTheme] = useState<WhaleTypes.Theme>(defaultTheme)
	const [currentPage, setCurrentPage] = useState<PageType | '/' | '404' | null>(null)

	function setTheme(theme: WhaleTypes.Theme) {
		localStorage.setItem('current_theme', theme.name.toLowerCase())
		setCurrentTheme(theme)
	}

	function setPage(pageURL?: string) {
		const nextPage = pageURL != '/'
			? core.getPageByUrl(pageURL || history.state?.url) || '404'
			: config.homePage ? '/' : core.getFirstPage()

		const title = typeof nextPage != 'string'
			? nextPage?.title + ' - ' + config.name
			: config.name || 'Documaker'

		document.title = title
		setCurrentPage(nextPage)
		return title
	}

	useMemo(() => {
		setPage(locationPath)
	}, [locationPath])

	window.onpopstate = () => setPage()

	function historyPush(pageURL: string) {
		history.pushState(
			{ url: pageURL },
			setPage(pageURL),
			pageURL
		)
	}

	if (location.pathname.match('architect')) {
		return (
			<FlowViewport currentTheme={currentTheme}>
				<PageHeader
					themes={themes}
					currentTheme={currentTheme}
					setTheme={setTheme}
					name={config.name + ' - Architect'}
					git={config.git}
					setIndex={() => historyPush('/')}
				/>
				<Architect />
			</FlowViewport>
		)
	}
	
	return (
		<FlowViewport currentTheme={currentTheme}>
			{currentPage === null && <PageEmpty />}
			{currentPage === '404' && <Page404 />}
			{currentPage === '/' && config.homePage &&
				<config.homePage
					history={{
						push: historyPush,
					}}
					pages={{
						docs: core.getFirstPage()?.url || '/',
					}}
				/>
			}
			{currentPage && typeof currentPage === 'object' &&
				<Fragment>
					<PageHeader
						themes={themes}
						currentTheme={currentTheme}
						setTheme={setTheme}
						name={config.name + ' - Documentation'}
						git={config.git}
						setIndex={() => historyPush('/')}
					/>
					<Flexbox css={{ minHeight: '100%' }}>
						<Sidebar
							currentPage={currentPage as PageType}
							pages={pages}
							onChange={(pageURL) => historyPush(pageURL)}
						/>
						<Page
							currentPage={currentPage as PageType}
							types={config.pages?.types}
							separatedTypes={config.pages?.separatedTypes}
						/>
					</Flexbox>
				</Fragment>
			}
		</FlowViewport>
	)
}

ReactDOM.render(
	<Documaker />,
	document.getElementById('documaker')
)