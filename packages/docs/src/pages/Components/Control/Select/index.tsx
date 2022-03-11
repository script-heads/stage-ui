import basic from './basic.raw?raw'
import multiselect from './multiselect.raw?raw'
import keepOpen from './keepOpen.raw?raw'

export const title = 'Select'
export { default as glyph } from './Select.svg'
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
