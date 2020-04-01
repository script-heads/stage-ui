import { Grid, Viewport, TextField, Button, Select, ScrollView, Table } from '@flow-ui/core'
import React, { useState, RefForwardingComponent } from 'react'
import ReactDOM from 'react-dom'
import Code from '@flow-ui/core/icons/svg/code'
import dt from '@flow-ui/docs/utils/types/index'
window.dt = dt
const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport theme="dark">
			<TextField
				value={value}
				onChange={(e) => setValue(e.target.value)}
				leftChild={(
					<Code />
				)}
			/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)