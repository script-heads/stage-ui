export const sizes = ['xs', 's', 'm', 'l', 'xl']

export default (
  spacingResolvers: Record<Stage.Sizes, Stage.JSS>,
  otherResolver: (value: string | number) => Stage.JSS,
  value?: Stage.Sizes | string | number,
): Stage.JSS | undefined => {
  if (!value) return undefined

  if (typeof value !== 'number' && sizes.includes(value)) {
    return spacingResolvers[value as Stage.Sizes]
  }

  return otherResolver(value)
}
