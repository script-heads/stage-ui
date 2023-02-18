import basic from './basic.raw?raw'
import advanced from './advanced.raw?raw'

export const title = 'Meter'
export { ReactComponent as glyph } from './Meter.svg'
export const ns = 'MeterTypes'
export const cases = [
  {
    label: 'Basic usage',
    code: basic,
  },
  {
    label: 'Advanced',
    code: advanced,
  },
]
