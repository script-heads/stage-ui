import { Global } from '@emotion/core'
import { Viewport } from '@flow-ui/core'
import * as defaultThemes from '@flow-ui/core/misc/themes/index'
import WhaleTypes from '@flow-ui/whale/types'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Router from './router'

export { default as Menu } from './components/Menu'
export { default as Sidebar } from './components/Sidebar'

declare global {
	interface Window {
		breakpoints: number[]
	}
}

window.breakpoints = [960, 768]

const Documaker = () => {
	
	const [theme, setTheme] = useState<WhaleTypes.Theme>(defaultThemes.light)

	useEffect(() => {
		localStorage.setItem('current_theme', theme.name.toLowerCase())
	},[theme])

	return (
		<Viewport theme={theme}>
			<Global
				styles={{
					'html,body,#documaker': {
						minHeight: '100vh',
						overscrollBehavior: 'none'
					}
				}}
			/>
			<Router
				theme={theme}
				defaultThemes={defaultThemes}
				setTheme={setTheme}
			/>
		</Viewport>
	)
}

ReactDOM.render(
	<Documaker />,
	document.getElementById('documaker')
)