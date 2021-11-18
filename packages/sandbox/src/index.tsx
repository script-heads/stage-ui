import { Viewport } from '@stage-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <Viewport theme="light">
    <App />
  </Viewport>,
  document.getElementById('app'),
)
