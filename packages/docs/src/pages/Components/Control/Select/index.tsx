import basic from './basic.raw?raw'
import multiselect from './multiselect.raw?raw'
import keepOpen from './keepOpen.raw?raw'

export const title = 'Select'
export { ReactComponent as glyph } from './Select.svg'
export const ns = 'SelectTypes'
export const cases = [
  {
    label: 'Basic usage',
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
