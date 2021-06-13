import basic from './basic.raw'
import custom from './custom.raw'

export const title = 'Calendar'
export const glyph = require(`./Calendar.svg`)
export const ns = 'CalendarTypes'
export const cases = [
  {
    label: 'Basic',
    code: basic,
  },
  {
    label: 'Custom day render',
    code: custom,
  },
]
