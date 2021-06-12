import { Block, useBreakpoints } from '@stage-ui/core'
import React from 'react'

export default () => {
  const size = useBreakpoints(['Large', 'Medium', 'Small', 'ExtraSmall'])

  return (
    <Block decoration="surface" p="m">
      Resize screen, current width: {size}
    </Block>
  )
}
