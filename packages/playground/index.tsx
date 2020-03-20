import { Block, Viewport, TextField, Button, ScrollView } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport>
			<Block>
				<form>
				<TextField type="email" autoComplete="email" />
				<TextField type="password" />
				<Button type="submit" />
				</form>
			</Block>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)