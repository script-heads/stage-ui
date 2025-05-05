/* eslint-disable no-console */
import React from 'react'

import { Button, Flexbox, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

import { light } from './theme'

const App: React.FC = () => {
  return (
    <Flexbox
      p="xl"
      style={{
        '& *:focus': {
          border: '2px red solid !important',
        },
      }}
    >
      <Button
        onClick={() => {
          console.log('event')
        }}
      >
        123
      </Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
