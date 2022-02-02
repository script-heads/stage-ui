import { Viewport, Pageswitch } from '@stage-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import theme from './themes/custom'

ReactDOM.render(
  <Viewport theme={theme}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
