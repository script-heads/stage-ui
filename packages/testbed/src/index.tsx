import React, { useRef } from 'react'

import { Block, Calendar, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const ref = useRef(null)
  return (
    <Block p="xl">
      <Block backgroundColor="gray100">
        <Calendar
          range
          hideToday
          overrides={{
            day: {
              height: '4rem',
            },
          }}
        />
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
