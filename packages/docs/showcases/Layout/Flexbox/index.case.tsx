import basic from './basic.raw'
import flexItem from './flexItem.raw'
import flexEnd from './flexEnd.raw'
import spaceBetween from './spaceBetween.raw'
import column from './column.raw'

export const title = 'Flexbox'
export const glyph = require(`./Flexbox.svg`)
export const ns = 'FlexboxTypes'
export const cases = [
  {
    label: 'Basic',
    code: basic,
  },
  {
    label: 'Flex item',
    code: flexItem,
  },
  {
    label: 'Flex end',
    code: flexEnd,
  },
  {
    label: 'Space between',
    code: spaceBetween,
  },
  {
    label: 'Column',
    code: column,
  },
]
