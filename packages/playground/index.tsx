import { Grid, Viewport, TextField, Button, ScrollView } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport theme="dark">
			<Grid p="2rem" gap="1rem">
				<TextField placeholder="E-mail" type="email" autoComplete="email" />
				<TextField type="password" />
				<Button type="submit" children="submit" />
			</Grid>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)