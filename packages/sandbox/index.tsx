import { Viewport } from '@stage-ui/core'
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
  return (
    <Viewport theme="dark">
      <TableTests />
    </Viewport>
  )
}

ReactDOM.render(<Playground />, document.getElementById('app'))
