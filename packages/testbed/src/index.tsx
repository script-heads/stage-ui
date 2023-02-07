import React, { useRef } from 'react'

import { Block, Button, modal, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const ref = useRef(null)
  return (
    <Block p="xl">
      <Block backgroundColor="gray100">
        <Button
          label="rightPanel"
          onClick={() => {
            modal({
              overrides: {
                overlay: {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              },
              decoration: 'rightPanel',
              hideHeader: true,
              render: () => <div>Right panel</div>,
            })
          }}
        />
        <Button
          label="leftPanel"
          onClick={() => {
            modal({
              overrides: {
                overlay: {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              },
              decoration: 'leftPanel',
              hideHeader: true,
              render: () => <div>Left panel</div>,
            })
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
