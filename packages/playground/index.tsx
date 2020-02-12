import { Button, Viewport, Text } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import custom from './themes/custom'
import App from './app'

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