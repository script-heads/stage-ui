import getFontSize from './getFontSize'
import isRem from './isRem'
import toFloat from './toFloat'

/**
 * Converts any value to number (example response: 16)
 */
function toPixel(input: string | number): number {
  if (isRem(input)) {
    return toFloat(input) * getFontSize()
  }
  return toFloat(input)
}

export default toPixel
