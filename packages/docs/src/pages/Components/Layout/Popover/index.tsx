/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Paragraph } from '@stage-ui/core'

import basic from './basic.raw?raw'

export const title = 'Popover'
export { ReactComponent as glyph } from './Popover.svg'
export const ns = 'PopoverTypes'
export const cases = [
  {
    label: 'Popover',
    code: basic,
  },
]

export default () => (
  <Block p="m">
    <Paragraph>
      Popovers are simple static components based on Flexbox with the ability to display
      an arrow on the side of it. You can configure its position using the 'align' prop,
      and if you need to move it more precisely, there is also an 'arrowOffset' prop
      available.
    </Paragraph>
  </Block>
)
