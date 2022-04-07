import Color from 'color'

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | Stage.ColorNames)
  | Color
  | Stage.ColorNames

const shadeColors = [
  'gray',
  'yellow',
  'orange',
  'red',
  'rose',
  'pink',
  'green',
  'lightGreen',
  'lime',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'purple',
]

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

      const isShadeColor =
        shade &&
        shadeColors.includes(color) &&
        Object.hasOwnProperty.call(theme.color[color], shade)

      if (isShadeColor) {
        resolvedColor = (theme.color[color] as Stage.ColorShades)[shade]
        break
      }

      if (!isShadeColor && Object.hasOwnProperty.call(theme.color, value)) {
        resolvedColor = theme.color[value as keyof Stage.Colors]
        break
      }

      if (Object.hasOwnProperty.call(theme.color.palette, value)) {
        resolvedColor = theme.color.palette[value]
        break
      }

      resolvedColor = Color(value)
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
