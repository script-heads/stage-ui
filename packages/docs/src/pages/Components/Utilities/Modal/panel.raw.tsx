import React from 'react'

import { Button, Flexbox, Text, modal } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    modal({
      hideHeader: true,
      decoration: 'panel',
      render: (close) => (
        <Flexbox column centered p="m" mb="xl">
          <Text>Modal window can be with decorated like a panel!</Text>
          <Button label="Okay" mt="m" onClick={close} />
        </Flexbox>
      ),
    })
  }
  return <Button onClick={handleClick} label="Panel sample" />
}
