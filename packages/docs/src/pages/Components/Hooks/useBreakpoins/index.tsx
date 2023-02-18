import basic from './basic.raw?raw'
import component from './component.raw?raw'

export { ReactComponent as glyph } from './useBreakpoints.svg'

export const title = 'useBreakpoints'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Advanced', code: component },
]
