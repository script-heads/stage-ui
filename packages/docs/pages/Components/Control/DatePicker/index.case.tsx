import basic from './basic.raw'
import range from './range.raw'

export const title = 'DatePicker'
export const glyph = require(`./DatePicker.svg`)
export const ns = 'DatePickerTypes'
export const cases = [
  {
    label: 'DatePicker',
    code: basic,
  },
  {
    label: 'Date range',
    code: range,
  },
]
