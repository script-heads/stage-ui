import basic from './basic.raw'
import finder from './finder.raw'
import custom from './custom.raw'

export const title = 'Tree'
export const glyph = require(`./Tree.svg`)
export const ns = 'TreeTypes'
export const cases = [
  {
    label: 'Basic',
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
