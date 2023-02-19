import basic from './basic.raw?raw'
import labelInside from './labelInside.raw?raw'
import password from './password.raw?raw'
import textarea from './textarea.raw?raw'

export const title = 'TextField'
export { ReactComponent as glyph } from './TextField.svg'
export const ns = 'TextFieldTypes'
export const cases = [
  {
    label: 'Basic usage',
    code: basic,
  },
  {
    label: 'Textarea',
    code: textarea,
  },
  {
    label: 'Label inside',
    code: labelInside,
  },
  {
    label: 'Visible password',
    code: password,
  },
]
