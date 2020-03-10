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
			<TextField label="TextField"/>
			<Block decoration="surface" p="m">
			Block
			</Block>
			<Select
				label="Select"
				options={[{
					text:'text',
					value: '1'
				}]}
			/>
			<Button>Button</Button>
			{/* <button
				children={'test'}
				onClick={() => {
					setQ(qq => !qq)
				}}
			/>
			{
				q && <BlockLutiy />
			} */}
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)