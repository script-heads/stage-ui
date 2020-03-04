import { Viewport } from '@flow-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import ThemeConfigurator from '../architect/src/ThemeConfigurator'
import PreviewCube from '../architect/src/ThemeConfigurator/PreviewCube'
// import App from './app'
import custom from './themes/custom'

const Playground = () => {
	const [theme, updateTheme] = React.useState(custom)
	
	return (
		<Viewport theme={theme}>
			{/* <App /> */}
			<PreviewCube />
			<ThemeConfigurator 
				original={custom}
				updateTheme={updateTheme} 
			/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)