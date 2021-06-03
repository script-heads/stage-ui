export type BreakpointProp<T> = T[] | T

export default <P = string | number | undefined>(
  value: P | P[],
  theme: Stage.Theme,
  resolver: (currentValue: P, theme: Stage.Theme) => Stage.JSS,
) => {
  if (Array.isArray(value)) {
    return value.map((currentValue: any, index: number) => {
      if (!index) return resolver(currentValue, theme)
      return { [`@media (max-width: ${theme.breakpoints[index]})`]: resolver(currentValue, theme) }
    }) as Stage.JSS
  }
  return resolver(value, theme)
}
