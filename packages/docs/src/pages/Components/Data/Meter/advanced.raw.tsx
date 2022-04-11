import React from 'react'

import { Meter } from '@stage-ui/core'

export default () => {
  return (
    <Meter p="s" backgroundColor="green50">
      <Meter.Thumb loading value={100} color="green300" />
      <Meter.Thumb value={35} color="green500" />
    </Meter>
  )
}
