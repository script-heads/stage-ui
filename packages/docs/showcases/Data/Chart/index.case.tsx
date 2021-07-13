import basic from './basic.raw'
import pie from './pie.raw'

export const title = 'Chart'
export const glyph = require(`./Chart.svg`)
export const lab = true
export const ns = 'ChartTypes'
export const cases = [
  {
    label: 'Chart',
    code: basic,
  },
  {
    label: 'Pie',
    code: pie,
  },
]
