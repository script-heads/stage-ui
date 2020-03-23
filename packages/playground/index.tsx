import { Grid, Viewport, TextField, Button, Select, ScrollView, Table } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport theme="dark">
			
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)