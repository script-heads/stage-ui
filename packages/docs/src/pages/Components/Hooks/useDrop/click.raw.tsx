import React from 'react'

import { Flexbox, Paragraph, useDrop } from '@stage-ui/core'

export default () => {
  const dropToggle = useDrop('Simple text')

  return (
    <Flexbox
      centered
      w="15rem"
      h="5rem"
      p="m"
      borderRadius="m"
      backgroundColor="blue500"
      onClick={dropToggle}
    >
      <Paragraph size="s" color="onPrimary" align="center">
        Hover to drop
      </Paragraph>
    </Flexbox>
  )
}
