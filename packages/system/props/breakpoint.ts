export type BreakpointProp<T> = T[] | T

function breakpointProp<P>(
  value: P | P[],
  theme: Stage.Theme,
  resolver: (
    currentValue: P,
    theme: Stage.Theme,
    index: number | null,
  ) => Stage.CSSInterpolation,
): Stage.CSSInterpolation {
  if (Array.isArray(value)) {
    return value.map((currentValue, index) => {
      if (!index) return resolver(currentValue, theme, 0)
      if (typeof currentValue === 'string' && currentValue === '*') return false
      return {
        [`@media (max-width: ${theme.breakpoints[index]})`]: resolver(
          currentValue,
          theme,
          index,
        ),
      }
    }) as Stage.CSSInterpolation
  }
  return resolver(value, theme, null)
}

export default breakpointProp
