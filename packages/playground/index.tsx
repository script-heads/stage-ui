import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport, Button, useTheme } from '@flow-ui/core'
import custom from './themes/custom'

const Playground = () => {
	const theme = useTheme()
	return (
		<Viewport>
			<Button children="hello"/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('playground')
)