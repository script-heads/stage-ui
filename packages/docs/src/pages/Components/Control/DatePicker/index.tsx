import basic from './basic.raw?raw'
import range from './range.raw?raw'

export const title = 'DatePicker'
export { ReactComponent as glyph } from './DatePicker.svg'
export const ns = 'DatePickerTypes'
export const isExperimental = true
export const cases = [
  {
    label: 'Basic usage',
    code: basic,
  },
  {
    label: 'Date range',
    code: range,
  },
]
