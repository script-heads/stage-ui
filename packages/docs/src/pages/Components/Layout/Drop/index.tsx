import basic from './basic.raw?raw'
import animation from './animation.raw?raw'
import stickCursor from './stickCursor.raw?raw'

export const title = 'Drop'
export { ReactComponent as glyph } from './Drop.svg'
export const ns = 'DropTypes'
export const cases = [
  {
    label: 'Drop',
    code: basic,
  },
  {
    label: 'Animation',
    code: animation,
  },
  {
    label: 'Stick cursor',
    code: stickCursor,
  },
]
