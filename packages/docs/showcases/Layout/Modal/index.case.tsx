import basic from './basic.raw'
import panel from './panel.raw'
import fullscreen from './fullscreen.raw'

export const title = 'Modal'
export const glyph = require(`./Modal.svg`)
export const ns = 'ModalTypes'
export const cases = [
  {
    label: 'Modal',
    code: basic,
  },
  {
    label: 'Panel decoration',
    code: panel,
  },
  {
    label: 'Fullscreen decoration',
    code: fullscreen,
  },
]
