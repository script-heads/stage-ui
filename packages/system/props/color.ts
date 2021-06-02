import Color from 'color'

/**
 * @display SystemTypes.Color
 * @link /props#color
 */
export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | string)
  | keyof Omit<Stage.Theme['color'], 'palette'>
  | keyof Stage.Theme['color']['palette']
  | Color
  | (string & { T?: string })

export default function color<V extends ColorProp | string | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  const resolvedColor = typeof value === 'function' ? value(theme.color) : value

  if (typeof resolvedColor === 'string') {
    if (theme.color[resolvedColor] && resolvedColor !== 'palette') {
      return theme.color[resolvedColor]
    }
    if (theme.color.palette[resolvedColor]) {
      return theme.color.palette[resolvedColor]
    }
    return Color(resolvedColor)
  }

  return resolvedColor
}
