import { Viewport } from '@stage-ui/core'
import dt from '@stage-ui/docs/utils/types'
import React from 'react'
import ReactDOM from 'react-dom'
import TableTests from './app/table'

declare global {
  interface Window {
    dt: any
  }
}

window.dt = dt

const Playground = () => (
  <Viewport theme="dark">
    <TableTests />
  </Viewport>
)

ReactDOM.render(<Playground />, document.getElementById('app'))
