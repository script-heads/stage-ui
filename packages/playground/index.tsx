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
const Test = () => {
	React.useEffect(() => {
		return () => {
			console.log(1)
		}
	},[])
	return (
		<div>111</div>
	)
}
const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport>
			<TextField 
				leftChild={<Test/>}
				value={value} 
				onChange={(e) => setValue(e.target.value)}
			/>
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)