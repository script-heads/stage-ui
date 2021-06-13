import basic from './basic.raw'
import advanced from './advanced.raw'

export const title = 'Meter'
export const glyph = require(`./Meter.svg`)
export const ns = 'MeterTypes'
export const cases = [
  {
    label: 'Basic',
    code: basic,
  },
  {
    label: 'Advanced',
    code: advanced,
  },
]
