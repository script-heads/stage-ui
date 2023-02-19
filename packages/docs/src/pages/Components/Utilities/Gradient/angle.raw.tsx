import React from 'react'

import { Block, useTheme } from '@stage-ui/core'
import { createGradient } from '@stage-ui/system'

export default () => {
  const theme = useTheme()
  const background = createGradient(theme, {
    colors: ['purple500', 'pink500'],
    angle: 45,
  })
  return <Block w="10rem" h="10rem" style={{ background }} />
}
