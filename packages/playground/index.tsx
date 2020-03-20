import { Grid, Viewport, TextField, Button, Select, ScrollView } from '@flow-ui/core'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport theme="dark">
			<Grid p="2rem" gap="1rem">
				<TextField placeholder="E-mail" type="email" autoComplete="email" />
				<TextField type="password" />
				<Select 
					options={[{
						text: 'Text 1',
						value: '1'
					},{
						text: 'Text 2',
						value: '2'
					}]}
					styles={{
						//TODO: displays only extended types
						selectedContainer: {
							backgroundColor: 'pink'
						},
					}}
				/>
				<Button type="submit" children="submit" />
			</Grid>
		
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)