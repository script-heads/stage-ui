import { Block, Flexbox, Grid, Header, ScrollView, Spinner } from '@stage-ui/core'
import React from 'react'
import PlaygroundControl from './control'
import PlaygroundMenu from './menu'
import PlaygroundSidebar from './sidebar'
import PlaygroundTable from './table'
import PlaygroundToolbar from './toolbar'
import PlaygroundTree from './tree'


const App = () => {
	return (
		<Flexbox>
			<ScrollView h="100vh" w="15rem" backgroundColor={c => c.surface}>
				<PlaygroundSidebar />
			</ScrollView>
			<ScrollView h="100vh" w="calc(100vw - 15rem)">
				<Block p={['4rem', '3rem', '2rem', '1rem']}>
					<Flexbox p="0.5rem" justifyContent="space-between">
						<Header>Playground</Header>
						<Spinner />
					</Flexbox>
					<PlaygroundMenu />
					<PlaygroundToolbar />
					<Grid templateColumns="1fr 1fr" columnGap="0.5rem">
						<PlaygroundTree />
						<PlaygroundTable />
					</Grid>
					<PlaygroundControl />
				</Block>
			</ScrollView>
		</Flexbox>
	)
}

export default App
