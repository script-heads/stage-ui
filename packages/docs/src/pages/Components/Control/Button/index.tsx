import basic from './basic.raw?raw'
import shape from './shape.raw?raw'
import size from './size.raw?raw'
import icon from './icon.raw?raw'
import loading from './loading.raw?raw'

export const title = 'Button'
export { ReactComponent as glyph } from './Button.svg'
export const ns = 'ButtonTypes'
export const cases = [
  {
    label: 'Basic usage',
    code: basic,
  },
  {
    label: 'Shape',
    code: shape,
  },
  {
    label: 'Size',
    code: size,
  },
  {
    label: 'Icon',
    code: icon,
  },
  {
    label: 'Loading',
    code: loading,
  },
]
