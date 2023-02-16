import basic from './basic.raw?raw'
import menu from './menu.raw?raw'
import custom from './custom.raw?raw'
import over from './over.raw?raw'

export { ReactComponent as glyph } from './useDrop.svg'

export const title = 'useDrop'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Menu context', code: menu },
  { label: 'All custom', code: custom },
  { label: 'Mouse over', code: over },
]
