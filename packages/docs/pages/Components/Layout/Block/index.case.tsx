import basic from './basic.raw'
import surface from './surface.raw'
import skeleton from './skeleton.raw'
import shadow from './shadow.raw'

export const title = 'Block'
export const glyph = require(`./Block.svg`)
export const ns = 'BlockTypes'
export const cases = [
  { label: 'Block', code: basic },
  { label: 'Surface', code: surface },
  { label: 'Shadow', code: shadow },
  { label: 'Skeleton', code: skeleton },
]
