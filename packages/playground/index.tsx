import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport, Button } from '@flow-ui/core'

declare global {
	namespace Whale {
		interface Palette {
			red: 'red'
		}
	}
}

const Playground = () => {
	return (
		<Viewport>
			<Button children="hello" color={c=> c.palette?.red}/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('playground')
)