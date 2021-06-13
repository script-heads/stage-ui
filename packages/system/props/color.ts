import Color from 'color'

/**
 * @display Stage.Color
 * @link /props#color
 */
export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | string)
  | keyof Omit<Stage.Theme['color'], 'palette'>
  | keyof Stage.Theme['color']['palette']
  | Color
  | (string & { T?: string })

export default function color<V extends ColorProp | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  const resolvedColor = typeof value === 'function' ? value(theme.color) : value

  if (typeof resolvedColor === 'string') {
    if (
      theme.color[resolvedColor as keyof Omit<Stage.Theme['color'], 'palette'>] &&
      resolvedColor !== 'palette'
    ) {
      return theme.color[
        resolvedColor as keyof Omit<Stage.Theme['color'], 'palette'>
      ] as V extends undefined ? undefined : Stage.Color
    }
    if (theme.color.palette[resolvedColor]) {
      return theme.color.palette[resolvedColor] as V extends undefined ? undefined : Stage.Color
    }
    return Color(resolvedColor) as V extends undefined ? undefined : Stage.Color
  }

  return resolvedColor as V extends undefined ? undefined : Stage.Color
}
