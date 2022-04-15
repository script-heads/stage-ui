import toPixel from './toPixel'

/**
 * Converts any value to pixels (example response: 16px)
 */
function toPx(input: string | number): string {
  return `${toPixel(input)}px`
}

export default toPx
