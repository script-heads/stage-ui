import React from 'react'

import { Button, Flexbox, Text, modal } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    modal({
      hideHeader: true,
      decoration: 'rightPanel',
      render: (close) => (
        <Flexbox column centered p="m" mb="xl">
          <Text>Modal window can be decorated like a side panel!</Text>
          <Button label="Okay" mt="m" onClick={close} />
        </Flexbox>
      ),
    })
  }
  return <Button onClick={handleClick} label="Side panel sample" />
}
