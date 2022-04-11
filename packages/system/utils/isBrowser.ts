const isBrowser =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  typeof navigator !== 'undefined'

export default isBrowser
