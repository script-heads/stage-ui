import type Stage from '../index'

export const sizes = ['xs', 's', 'm', 'l', 'xl']

function sizeProp<T, V>(
  value: V,
  spacingResolvers: Record<Stage.Sizes, T>,
  otherResolver: (value: V) => T,
): T {
  if (typeof value === 'string' && sizes.includes(value)) {
    return spacingResolvers[value as Stage.Sizes]
  }

  return otherResolver(value)
}

export default sizeProp
