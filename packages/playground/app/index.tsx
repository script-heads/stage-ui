import React from 'react'
import PlaygroundToolbar from './toolbar'
import PlaygroundTable from './table'
import { Block } from '@flow-ui/core'

const App = () => {
	return (
		<Block p={['4rem','3rem','2rem','1rem']}>
			<PlaygroundToolbar  />
			<PlaygroundTable />
		</Block>
	)
}

export default App
