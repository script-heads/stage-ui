import basic from './basic.raw?raw'
import advanced from './advanced.raw?raw'

export const title = 'Menu'
export { ReactComponent as glyph } from './Menu.svg'
export const ns = 'MenuTypes'
export const cases = [
  {
    label: 'Basic usage',
    code: basic,
  },
  {
    label: 'Advanced',
    code: advanced,
  },
]
