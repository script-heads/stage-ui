import getFontSize from './getFontSize'
import isRem from './isRem'
import toFloat from './toFloat'

/**
 * Converts any value to rems (example response: 1rem)
 */
function toRem(input: string | number): string {
  if (isRem(input)) {
    return input.toString()
  }
  return `${toFloat(input) / getFontSize()}rem`
}

export default toRem
