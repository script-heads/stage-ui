import isBrowser from './isBrowser'
import toPixel from './toPixel'

import type Stage from '../index'
/**
 * Get current breakpoint index
 */
function getCurrentBreakpoint(theme: Stage.Theme): number {
  let index = 0
  const documentWidth = isBrowser
    ? document.body.clientWidth || document.body.offsetWidth
    : 0
  theme.breakpoints.forEach((breakpoint, i) => {
    if (documentWidth <= toPixel(breakpoint)) {
      index = i
    }
  })
  return index
}

export default getCurrentBreakpoint
