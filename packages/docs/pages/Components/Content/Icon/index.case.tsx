import basic from './basic.raw'
import rotate from './rotate.raw'
import shapes from './shapes.raw'

export const title = 'Icon'
export const glyph = require(`./Icon.svg`)
export const ns = 'IconTypes'
export const cases = [
  { label: 'Icon', code: basic },
  { label: 'Shapes', code: shapes },
  { label: 'Rotate', code: rotate },
]
