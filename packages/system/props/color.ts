import Color from 'color'

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | Stage.ColorNames)
  | Color
  | Stage.ColorNames

function colorProp<V extends ColorProp | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  let resolvedColor

  switch (typeof value) {
    case 'string': {
      const [color, shade] = value.split(/(\d+)/) as [
        keyof Stage.Colors,
        keyof Stage.ColorShades,
      ]
      if (shade) {
        resolvedColor = (theme.color[color] as Stage.ColorShades)[shade]
      } else {
        resolvedColor = theme.color[color] || theme.color.palette[color]
      }
      break
    }
    case 'function': {
      resolvedColor = colorProp(value(theme.color), theme)
      break
    }
    case 'undefined': {
      resolvedColor = value
      break
    }
    default: {
      resolvedColor = Color(value)
    }
  }

  return resolvedColor as V extends undefined ? undefined : Stage.Color
}

export default colorProp
