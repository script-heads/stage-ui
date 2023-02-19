import basic from './basic.raw?raw'
import fullscreen from './fullscreen.raw?raw'
import panel from './panel.raw?raw'
import panelSide from './panelSide.raw?raw'
import header from './header.raw?raw'

export const title = 'modal'
export { ReactComponent as glyph } from './Modal.svg'
export const ns = 'ModalTypes'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Fullscreen', code: fullscreen },
  { label: 'Panel', code: panel },
  { label: 'Panel side', code: panelSide },
  { label: 'Header', code: header },
]
