import basic from './basic.raw'
import multiselect from './multiselect.raw'
import keepOpen from './keepOpen.raw'

export const title = 'Select'
export const glyph = require(`./Select.svg`)
export const ns = 'SelectTypes'
export const cases = [
  {
    label: 'Select',
    code: basic,
  },
  {
    label: 'Multiselect',
    code: multiselect,
  },
  {
    label: 'Keep open',
    code: keepOpen,
  },
]

export { default as test } from './index.test'
