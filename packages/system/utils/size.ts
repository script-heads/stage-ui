import isBrowser from './isBrowser'

/**
 * Converts any value to Float
 */
export const toFloat = (input: string | number) => {
  const value = parseFloat(input.toString().replace(/[^\d.-]+/, ''))
  return Number.isNaN(value) ? 0 : value
}

/**
 * Get base fontSize
 */
export const baseFontSize = () =>
  isBrowser
    ? toFloat(
        window?.getComputedStyle(document.body).getPropertyValue('font-size') || '16px',
      )
    : 0

/**
 * Checks if value are rem value
 */
export const isRem = (input: string | number) => !!/rem/.exec(input.toString())

/**
 * Converts any value to number (example response: 16)
 */
export const toPixel = (input: string | number) => {
  if (isRem(input)) {
    return toFloat(input) * baseFontSize()
  }
  return toFloat(input)
}

/**
 * Converts any value to pixels (example response: 16px)
 */
export const toPx = (input: string | number) => `${toPixel(input)}px`

/**
 * Converts any value to rems (example response: 1rem)
 */
export const toRem = (input: string | number) => {
  if (isRem(input)) {
    return input.toString()
  }
  return `${toFloat(input) / baseFontSize()}rem`
}
