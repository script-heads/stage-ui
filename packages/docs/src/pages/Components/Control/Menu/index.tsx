import basic from './basic.raw?raw'
import advanced from './advanced.raw?raw'

export const title = 'Menu'
export { default as glyph } from './Menu.svg'
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
