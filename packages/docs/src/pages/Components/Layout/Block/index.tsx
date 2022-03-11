import basic from './basic.raw?raw'
import surface from './surface.raw?raw'
import skeleton from './skeleton.raw?raw'
import shadow from './shadow.raw?raw'

export const title = 'Block'
export { ReactComponent as glyph } from './Block.svg'
export const ns = 'BlockTypes'
export const cases = [
  { label: 'Block', code: basic },
  { label: 'Surface', code: surface },
  { label: 'Shadow', code: shadow },
  { label: 'Skeleton', code: skeleton },
]
