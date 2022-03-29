import basic from './basic.raw?raw'
import fullscreen from './fullscreen.raw?raw'
import panel from './panel.raw?raw'

export const title = 'Dialog'
export { ReactComponent as glyph } from './Dialog.svg'
export const ns = 'DialogTypes'
export const cases = [
  { label: 'Dialog', code: basic },
  { label: 'Fullscreen', code: fullscreen },
  { label: 'Panel', code: panel },
]
