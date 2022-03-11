import custom from './custom.raw?raw'
import basic from './basic.raw?raw'
import placement from './placement.raw?raw'

export const title = 'Notify'
export { default as glyph } from './Notify.svg'
export const ns = 'NotifyTypes'
export const cases = [
  { label: 'Notify', code: basic },
  { label: 'Placement', code: placement },
  { label: 'Custom render', code: custom },
]
