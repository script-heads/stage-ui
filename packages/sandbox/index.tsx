import { jsx } from '@emotion/react'
import { Viewport } from '@stage-ui/core'
import ModalTypes from '@stage-ui/core/layout/Modal/types'
import dt from '@stage-ui/docs/utils/types'
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import TableTests from './app/table'

declare global {
    interface Window { 
		dt: any
		jsx: any
	 }
}

window.dt = dt

// esbuild hack
window.jsx = jsx

const Playground = () => {
	const modal = useRef<ModalTypes.Ref>(null)

	return (
		<Viewport theme="dark">
			<TableTests />
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)