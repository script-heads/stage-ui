import basic from './basic.raw'
import fullscreen from './fullscreen.raw'
import panel from './panel.raw'

export const title = 'Dialog'
export const glyph = require(`./Dialog.svg`)
export const ns = 'DialogTypes'
export const cases = [
  { label: 'Dialog', code: basic },
  { label: 'Fullscreen', code: fullscreen },
  { label: 'Panel', code: panel },
]
