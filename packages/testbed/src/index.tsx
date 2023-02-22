import React, { useRef } from 'react'

import {
  Block,
  Button,
  Flexbox,
  Paragraph,
  TextField,
  useDropOver,
  Viewport,
} from '@stage-ui/core'

import ReactDOM from 'react-dom'

const App: React.FC = () => {
  const ref = useRef(null)
  const drop1 = useDropOver(
    <Block m="m">
      <Paragraph>Drop 1</Paragraph>
      <TextField placeholder="TextField" />
    </Block>,
    {
      onOpen: () => console.log('Drop 1 open'),
      onClose: () => console.log('Drop 1 close'),
    },
  )
  const drop2 = useDropOver(
    <Block m="m">
      <Paragraph>Drop 2</Paragraph>
      <TextField placeholder="TextField" />
    </Block>,
    {
      onOpen: () => console.log('Drop 2 open'),
      onClose: () => console.log('Drop 2 close'),
    },
  )
  return (
    <Flexbox p="xl">
      <Button label="Drop1" {...drop1} />
      <Button label="Drop2" {...drop2} />
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
