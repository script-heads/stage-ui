/* eslint-disable no-console */
import React, { useRef } from 'react'

import { Button, Flexbox, useDropMenu, useDropOver, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const ref = useRef(null)
  const drop1 = useDropMenu(
    [
      {
        text: 'Test',
        icon: 'AlertCircle',
      },
      {
        text: 'Selected',
        selected: true,
        icon: 'Activity',
      },
      {
        text: 'Test 2',
        icon: 'AlertTriangle',
      },
    ],
    {
      dropOffsetY: 10,
      onOpen: () => console.log('Drop 1 open'),
      onClose: () => console.log('Drop 1 close'),
    },
  )

  const drop2 = useDropMenu(
    [
      {
        text: 'Test 2',
      },
    ],
    {
      dropOffsetY: 10,
      clickMode: 'open',
      onOpen: () => console.log('Drop 2 open'),
      onClose: () => console.log('Drop 2 close'),
    },
  )

  const drop3 = useDropOver('Drop 3', {
    onOpen: () => console.log('Drop 4 open'),
    onClose: () => console.log('Drop 4 close'),
  })
  const drop4 = useDropOver('Drop 4', {
    onOpen: () => console.log('Drop 4 open'),
    onClose: () => console.log('Drop 4 close'),
  })

  return (
    <Flexbox p="xl">
      <Button label="Drop1" onClick={drop1} />
      <Button label="Drop2" onClick={drop2} />
      <Button label="Drop3" {...drop3} />
      <Button label="Drop4" {...drop4} />
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
