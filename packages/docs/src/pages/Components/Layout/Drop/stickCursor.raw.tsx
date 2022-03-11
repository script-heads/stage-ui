import { Block, Drop } from '@stage-ui/core'
import React from 'react'

export default () => {
  return (
    <Drop stickCursor>
      <Block decoration="minorShadow" children="Let me go!" p=".5rem 1rem" />
    </Drop>
  )
}
