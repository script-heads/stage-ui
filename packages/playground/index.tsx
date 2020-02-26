import { Viewport, Meter } from '@flow-ui/core'
import MeterStack from '@flow-ui/lab/data/MeterStack'
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