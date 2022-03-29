import React from 'react'

import { Viewport } from '@stage-ui/core'
import ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
