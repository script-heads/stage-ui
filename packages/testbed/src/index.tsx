import React, { useRef } from 'react'

import { Block, DatePicker, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const ref = useRef(null)
  return (
    <Block p="xl">
      <Block w="6rem">
        <DatePicker />
      </Block>
    </Block>
  )
}

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
