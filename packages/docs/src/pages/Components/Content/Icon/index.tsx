import basic from './basic.raw?raw'
import rotate from './rotate.raw?raw'
import shapes from './shapes.raw?raw'

export const title = 'Icon'
export { ReactComponent as glyph } from './Icon.svg'
export const ns = 'IconTypes'
export const cases = [
  { label: 'Icon', code: basic },
  { label: 'Shapes', code: shapes },
  { label: 'Rotate', code: rotate },
]
