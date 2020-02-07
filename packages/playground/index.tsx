import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport, Button, useTheme } from '@flow-ui/core'
import { ArrowIosForward } from '@flow-ui/core/icons'
import custom from './themes/custom'

const Playground = () => {
	return (
		<Viewport theme={custom}>
<<<<<<< HEAD
			<Button children="hello" color={c=> c.palette.red.css()}/>
			<ArrowIosForward/>
=======
			<Button children="hello" color={c=>c.palette.red.css()}/>
>>>>>>> 0234bf6a5becb46f510efa3757a924677ab5229c
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('playground')
)