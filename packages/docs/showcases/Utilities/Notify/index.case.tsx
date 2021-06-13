import custom from './custom.raw'
import basic from './basic.raw'

export const title = 'Notify'
export const glyph = require(`./Notify.svg`)
export const ns = 'NotifyTypes'
export const cases = [
  { label: 'Basic', code: basic },
  { label: 'Custom render', code: custom },
]
