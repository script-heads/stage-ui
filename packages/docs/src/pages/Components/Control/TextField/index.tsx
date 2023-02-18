import basic from './basic.raw?raw'
import labelInside from './labelInside.raw?raw'
import withMask from './withMask.raw?raw'
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
    label: 'Label inside',
    code: labelInside,
  },
  {
    label: 'With mask',
    code: withMask,
  },
  {
    label: 'Textarea',
    code: textarea,
  },
  {
    label: 'Visible password',
    code: password,
  },
]

export { default as test } from './index.test'
