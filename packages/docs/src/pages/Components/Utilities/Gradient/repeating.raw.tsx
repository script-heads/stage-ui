import React from 'react'

import { Block, useTheme } from '@stage-ui/core'
import { createGradient } from '@stage-ui/system'

export default () => {
  const theme = useTheme()
  const background = createGradient(theme, {
    colors: ['orange200', 'orange500'],
    positions: ['0rem', '1rem'],
    type: 'radial',
    repeating: true,
  })
  return <Block borderRadius="100%" w="10rem" h="10rem" style={{ background }} />
}
