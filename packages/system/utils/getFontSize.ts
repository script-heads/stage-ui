import isBrowser from './isBrowser'
import toFloat from './toFloat'

/**
 * Get base fontSize
 */
function getFontSize(): number {
  return isBrowser
    ? toFloat(
        window?.getComputedStyle(document.body).getPropertyValue('font-size') || '16px',
      )
    : 0
}

export default getFontSize
