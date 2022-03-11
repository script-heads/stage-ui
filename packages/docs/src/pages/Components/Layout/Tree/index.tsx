import basic from './basic.raw?raw'
import finder from './finder.raw?raw'
import custom from './custom.raw?raw'

export const title = 'Tree'
export { default as glyph } from './Tree.svg'
export const ns = 'TreeTypes'
export const cases = [
  {
    label: 'Tree',
    code: basic,
  },
  {
    label: 'Finder',
    code: finder,
  },
  {
    label: 'Custom farbica',
    code: custom,
  },
]
