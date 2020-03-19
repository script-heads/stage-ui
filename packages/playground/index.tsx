import { Block, Viewport, TextField, Button, Select } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const BlockLutiy = () => {
	return (
		<div>
			{
				'-'.repeat(0).split('-').map((_, index) => (
					<Block key={index} >{index}</Block>
				))
			}
		</div>
	)
}
const Playground = () => {
	const [q, setQ] = useState(true)
	return (
		<Viewport>
			{/* <TextField label="TextField" tabIndex={0} />
			<Block decoration="surface" p="m" tabIndex={0}>
			Block
			</Block>
			<Select
			tabIndex={0}
				label="Select"
				options={[{
					text:'text',
					value: '1'
				}]}
			/> */}
			<TextField label="TextField" tabIndex={0} />
			<Button tabIndex={0}>Button</Button>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)