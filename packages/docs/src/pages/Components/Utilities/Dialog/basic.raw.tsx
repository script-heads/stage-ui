import React from 'react'
import { dialog, Block, Button, Paragraph, Flexbox } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    dialog((close) => (
      <Block>
        <Paragraph>Hello folks!</Paragraph>
        <Flexbox justifyItems="flex-end">
          <Button label="Hello" onClick={close} />
        </Flexbox>
      </Block>
    ))
  }
  return <Button onClick={handleClick} label="Push" />
}
