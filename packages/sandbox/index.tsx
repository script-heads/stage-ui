import { Viewport } from '@stage-ui/core'
import dt from '@stage-ui/docs/utils/types'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

declare global {
  interface Window {
    dt: any
  }
}
window.dt = dt

ReactDOM.render(
  <Viewport theme="dark">
    <App />
  </Viewport>,
  document.getElementById('app'),
)
