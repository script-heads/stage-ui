import basic from './basic.raw'
import animation from './animation.raw'
import stickCursor from './stickCursor.raw'

export const title = 'Drop'
export const glyph = require(`./Drop.svg`)
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
