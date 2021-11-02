import custom from './custom.raw'
import basic from './basic.raw'
import placement from './placement.raw'

export const title = 'Notify'
export const glyph = require(`./Notify.svg`)
export const ns = 'NotifyTypes'
export const cases = [
  { label: 'Notify', code: basic },
  { label: 'Placement', code: placement },
  { label: 'Custom render', code: custom },
]
