import basic from './basic.raw?raw'
import custom from './custom.raw?raw'

export const title = 'Calendar'
export { default as glyph } from './Calendar.svg'
export const ns = 'CalendarTypes'
export const cases = [
  {
    label: 'Calendar',
    code: basic,
  },
  {
    label: 'Custom day render',
    code: custom,
  },
]
