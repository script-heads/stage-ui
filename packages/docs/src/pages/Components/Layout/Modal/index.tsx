import basic from './basic.raw?raw'
import panel from './panel.raw?raw'
import fullscreen from './fullscreen.raw?raw'

export const title = 'Modal'
export { default as glyph } from './Modal.svg'
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
