/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import isObject from './isObject'

export default function mergeObjects<
  Target extends Record<string, any>,
  Source extends Record<string, any>,
  Resolver extends (value: any) => any,
>(target: Target, src: Source, resolver?: Resolver): Target & Source {
  const result = { ...target } as Target & Source

  Object.keys(src).forEach((key) => {
    if (isObject(src[key])) {
      if (!isObject(result[key])) {
        result[key as keyof typeof result] = {} as Target[keyof Target]
      }
      result[key as keyof Source] = mergeObjects(result[key], src[key], resolver)
      return
    }
    result[key as keyof Source] = src[key]

    if (resolver) result[key as keyof Source] = resolver(result[key])
  })

  return result
}
