export type BreakpointProp<T> = T[] | T

export default (value: any, theme: Stage.Theme, resolver: (currentValue: any, theme: Stage.Theme) => Stage.JSS) => {
  if (Array.isArray(value)) {
    return value.map((currentValue: any, index: number) => ({
      [`@media (max-width: ${theme.breakpoints[index]})`]: resolver(currentValue, theme),
    })) as Stage.JSS
  }
  return resolver(value, theme)
}
