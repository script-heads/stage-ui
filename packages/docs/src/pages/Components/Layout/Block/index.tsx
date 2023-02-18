import basic from './basic.raw?raw'
import surface from './surface.raw?raw'
import skeleton from './skeleton.raw?raw'
import shadow from './shadow.raw?raw'

export const title = 'Block'
export { ReactComponent as glyph } from './Block.svg'
export const ns = 'BlockTypes'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Surfaces', code: surface },
  { label: 'Shadows', code: shadow },
  { label: 'Skeleton', code: skeleton },
]
