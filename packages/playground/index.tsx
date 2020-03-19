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
						<br/>
						<br/>

			<Block decoration="surface" p="m">
			Block
			</Block>
			<br/>
			<br/>
			<br/>
			<Select
			tabIndex={0}
				label="Select"
				options={[{
					text:'text1',
					value: '1'
				},{
					text:'text2',
					value: '2'
				}]}
			/>
						<br/>
						<br/>

			<Button tabIndex={0}>Button</Button>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)