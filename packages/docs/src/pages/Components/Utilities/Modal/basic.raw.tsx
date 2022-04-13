import React from 'react'

import { Button, Flexbox, Text, modal } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    modal((close) => (
      <Flexbox column centered p="m">
        <Text>Throw basic modal with modal function from utils</Text>
        <Button label="Okay" mt="m" onClick={close} />
      </Flexbox>
    ))
  }
  return <Button onClick={handleClick} label="Basic sample" />
}
