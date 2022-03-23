import React from 'react'
import { Block, Button, dialog, Flexbox } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    dialog({
      title: 'Hello',
      subtitle: 'folks!',
      decoration: 'fullscreen',
      render: (close) => (
        <Block>
          <Flexbox justifyItems="flex-end">
            <Button label="Hello" onClick={close} />
          </Flexbox>
        </Block>
      ),
    })
  }
  return <Button onClick={handleClick} label="Push" />
}
