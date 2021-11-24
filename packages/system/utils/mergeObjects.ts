/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-nocheck
export default function mergeObjects<
  Target extends Record<string, any>,
  Source extends Record<string, any>,
  Resolver extends (value: any) => any,
>(target: Target, src: Source, resolver?: Resolver) {
  const result = { ...target } as Target & Source
  Object.keys(src).forEach((key) => {
    if (typeof src[key] === 'object' && !Array.isArray(src[key])) {
      if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
        target[key] = {}
      }
      result[key as keyof Source] = mergeObjects(target[key], src[key], resolver)
    } else {
      result[key as keyof Source] = src[key]
    }
    if (resolver) result[key as keyof Source] = resolver(result[key])
  })
  return result
}
