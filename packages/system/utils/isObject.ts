function isObject(value: any) {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) return true
  return false
}

export default isObject
