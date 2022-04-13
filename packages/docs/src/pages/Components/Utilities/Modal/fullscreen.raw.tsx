import React from 'react'

import { Button, Flexbox, Text, modal } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    modal({
      hideHeader: true,
      decoration: 'fullscreen',
      render: (close) => (
        <Flexbox column centered h="100vh">
          <Text>Modal window can be with fullscreen decoration!</Text>
          <Button label="Okay" mt="m" onClick={close} />
        </Flexbox>
      ),
    })
  }
  return <Button onClick={handleClick} label="Fullscreen sample" />
}
