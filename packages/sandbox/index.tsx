import { Viewport, Pageswitch } from '@stage-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app'

ReactDOM.render(
  <Viewport theme="light">
    <Pageswitch length={0} pageSize={20} />
    {/* <App /> */}
  </Viewport>,
  document.getElementById('app'),
)
