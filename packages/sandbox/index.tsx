import { Viewport } from '@stage-ui/core'
import Themer from '@stage-ui/docs/components/Themer'
import dt from '@stage-ui/docs/utils/types'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

declare global {
    interface Window { dt: any }
}

window.dt = dt

const Playground = () => {
	return (
		<Viewport theme="dark">
			<Themer />
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)