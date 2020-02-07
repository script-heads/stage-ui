import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport, Button, useTheme } from '@flow-ui/core'
import custom from './themes/custom'

const Playground = () => {
	return (
		<Viewport theme={custom}>
			<Button children="hello" color={c=>c.palette.red.css()}/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('playground')
)