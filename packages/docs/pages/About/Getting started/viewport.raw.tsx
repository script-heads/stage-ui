import ReactDOM from 'react-dom'
import React from 'react'
import { Viewport } from '@flow-ui/core'
import App from './app'

const Index = () => (
    <Viewport>
        <App/>
    </Viewport>
)

ReactDOM.render(
	<Index />,
	document.getElementById('documaker')
)