/* eslint-disable no-console */
import React from 'react'

import { Block, Button, Flexbox, modal, Viewport } from '@stage-ui/core'

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
          modal({
            title: 'Hello',
            render: () => {
              return (
                <Block
                  style={{
                    '& *:focus': {
                      outline: '2px red solid !important',
                    },
                  }}
                >
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
