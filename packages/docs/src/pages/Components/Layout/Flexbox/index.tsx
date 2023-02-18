import basic from './basic.raw?raw'
import flexItem from './flexItem.raw?raw'
import flexEnd from './flexEnd.raw?raw'
import spaceBetween from './spaceBetween.raw?raw'
import column from './column.raw?raw'

export const title = 'Flexbox'
export { ReactComponent as glyph } from './Flexbox.svg'
export const ns = 'FlexboxTypes'
export const cases = [
  {
    label: 'Basic usage',
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
