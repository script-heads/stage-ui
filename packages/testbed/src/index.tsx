import React, { useState } from 'react'

import { CircularProgress, Flexbox, Viewport, useTheme } from '@stage-ui/core'
import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const [state, setState] = useState(50)
  const s = useTheme()
  return (
    <>
      <Flexbox m="m">
        <CircularProgress
          value={state}
          mx="s"
          showValue
          color={s.color.black.rgb()}
          size="3.75rem"
        />
        {/* <CircularProgress value={state} shape="square" shadow="s" mx="s" />
        <TextField
          type="number"
          value={state}
          onChange={(e) => setState(e.target.value)}
          leftChild={<CircularProgress size="xs" value={state} />}
        /> */}
        {/* <Meter value={state} /> */}
      </Flexbox>
      {/* <CircularProgress
        size="m"
        backgroundColor="transparent"
        color="green500"
        value={50}
        m="s"
      />

      <CircularProgress text={state} size="xs" value={state} m="s" />
      <CircularProgress size="s" value={state} m="s">
        {state}
      </CircularProgress>
      <CircularProgress size="m" value={state} m="s" />
      <CircularProgress size="l" value={state} m="s" />
      <CircularProgress size="10rem" color="green500" value={state} m="s" /> */}
    </>
  )
}

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
