import basic from './basic.raw?raw'
import scrollToElement from './scrollToElement.raw?raw'
import scrollTop from './scrollTop.raw?raw'
import watchElement from './watchElement.raw?raw'

export const title = 'ScrollView'
export { default as glyph } from './ScrollView.svg'
export const ns = 'ScrollViewTypes'
export const cases = [
  {
    label: 'ScrollView',
    code: basic,
  },
  {
    label: 'Scroll top',
    code: scrollTop,
  },
  {
    label: 'Scroll to element',
    code: scrollToElement,
  },
  {
    label: 'Watch element',
    code: watchElement,
  },
]
