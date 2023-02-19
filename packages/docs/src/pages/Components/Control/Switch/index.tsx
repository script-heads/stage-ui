import basic from './basic.raw?raw'
import shape from './shape.raw?raw'
import color from './color.raw?raw'
import icon from './icon.raw?raw'

export const title = 'Switch'
export { ReactComponent as glyph } from './Switch.svg'
export const ns = 'SwitchTypes'
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
    label: 'Color',
    code: color,
  },
  {
    label: 'Icon',
    code: icon,
  },
]
