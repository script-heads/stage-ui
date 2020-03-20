import { Block, Viewport, TextField, Button, ScrollView } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport>
			<Block m={undefined}>
				1
			</Block>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)