import { Viewport } from '@flow-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import custom from './themes/custom'

const Playground = () => {
	return (
		<Viewport theme={custom}>
			<App />
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)