import React from 'react'

import { ArcProgress, Paragraph, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  return (
    <ArcProgress size="l" value={50} m="m">
      <Paragraph align="center" w="100%">
        40
      </Paragraph>
    </ArcProgress>
  )
}

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
