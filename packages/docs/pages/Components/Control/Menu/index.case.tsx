import basic from './basic.raw'
import advanced from './advanced.raw'

export const title = 'Menu'
export const glyph = require(`./Menu.svg`)
export const ns = 'MenuTypes'
export const cases = [
  {
    label: 'Menu',
    code: basic,
  },
  {
    label: 'Advanced',
    code: advanced,
  },
]
