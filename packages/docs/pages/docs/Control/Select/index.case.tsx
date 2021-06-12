import basic from './basic.raw'
import multiselect from './multiselect.raw'
import keepOpen from './keepOpen.raw'

export const title = 'Select'
export const ns = 'SelectTypes'
export const cases = [
  {
    label: 'Basic',
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
