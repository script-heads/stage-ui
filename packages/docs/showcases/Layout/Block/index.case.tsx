import basic from './basic.raw'
import decoration from './decoration.raw'

export const title = 'Block'
export const glyph = require(`./Block.svg`)
export const ns = 'BlockTypes'
export const cases = [
  { label: 'Basic', code: basic },
  { label: 'Decoration', code: decoration },
]
