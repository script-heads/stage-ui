/**
 * Checks if value are rem value
 */
function isRem(input: string | number): boolean {
  return !!/rem/.exec(input.toString())
}

export default isRem
