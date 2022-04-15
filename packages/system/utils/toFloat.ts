/**
 * Converts any value to Float
 */
function toFloat(input: string | number): number {
  const value = parseFloat(input.toString().replace(/[^\d.-]+/, ''))
  return Number.isNaN(value) ? 0 : value
}

export default toFloat
