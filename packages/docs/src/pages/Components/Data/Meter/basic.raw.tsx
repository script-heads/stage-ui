import React from 'react'

import { Block, Meter } from '@stage-ui/core'

export default () => {
  return (
    <Block p="m" decoration="surface">
      <Meter value={35} />
    </Block>
  )
}
