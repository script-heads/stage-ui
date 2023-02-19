import React from 'react'

import { Block, Meter } from '@stage-ui/core'

export default () => {
  return (
    <Block p="m" decoration="surface">
      <Meter>
        <Meter.Thumb loading value={50} color="blue400" />
        <Meter.Thumb value={20} />
      </Meter>
    </Block>
  )
}
