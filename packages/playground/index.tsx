import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport, Button, useTheme } from '@flow-ui/core'
import { ArrowIosForward } from '@flow-ui/core/icons'
import custom from './themes/custom'

const Playground = () => {
	const theme = useTheme()
	return (
		<Viewport theme={custom}>
			<Button children="hello" color={c=> c.palette.red.css()}/>
			<ArrowIosForward/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('playground')
)