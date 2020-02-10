import { Button, Viewport } from '@flow-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import custom from './themes/custom'

const Playground = () => {
	return (
		<Viewport theme={custom}>
			<Button 
				children="hello" 
				color={c=>c.palette.red.css()} 
				styles={{container: (variant) => ({backgroundColor: 'yellow'})}}
			/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)