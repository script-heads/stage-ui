import React from 'react'

import { Block, Paragraph } from '@stage-ui/core'

import basic from './basic.raw?raw'
import angle from './angle.raw?raw'
import color from './color.raw?raw'
import repeating from './repeating.raw?raw'

export const title = 'createGradient'
export { ReactComponent as glyph } from './Gradient.svg'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Angle', code: angle },
  { label: 'Color', code: color },
  { label: 'Repeating', code: repeating },
]

export default () => (
  <Block p="m">
    <Paragraph>
      This utility allows you to create custom gradients from colors of the theme. You can
      use it to create a custom gradient palette in the theme or create complex gradients
      right in the component.
    </Paragraph>
  </Block>
)
