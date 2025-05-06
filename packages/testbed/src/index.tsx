/* eslint-disable no-console */
import React from 'react'

import { Block, Button, Flexbox, modal, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

import { light } from './theme'

const App: React.FC = () => {
  return (
    <Flexbox p="xl">
      <Button
        onClick={() => {
          modal({
            title: 'Hello',
            trapFocus: true,
            render: () => {
              return (
                <Block>
                  <button onClick={() => alert('hello')}>123</button>
                  <input />
                </Block>
              )
            },
          })
        }}
      >
        123
      </Button>
      <Button decoration="outline">2</Button>
      <Button decoration="plain">3</Button>
      <Button decoration="text">tesxt</Button>
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
