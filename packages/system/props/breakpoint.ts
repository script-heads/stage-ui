export type BreakpointProp<T> = T[] | T

function breakpointProp<P = string | number | undefined>(
  value: P | P[],
  theme: Stage.Theme,
  resolver: (currentValue: P, theme: Stage.Theme) => Stage.CSSInterpolation,
): Stage.CSSInterpolation {
  if (Array.isArray(value)) {
    return value.map((currentValue: any, index: number) => {
      if (!index) return resolver(currentValue, theme)
      if (currentValue === '*') return false
      return {
        [`@media (max-width: ${theme.breakpoints[index]})`]: resolver(
          currentValue,
          theme,
        ),
      }
    }) as Stage.CSSInterpolation
  }
  return resolver(value, theme)
}

export default breakpointProp
