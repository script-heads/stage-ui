function isObject(value: any): boolean {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) return true
  return false
}

export default isObject
