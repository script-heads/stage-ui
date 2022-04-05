import Color from 'color'

type ColorObject<C = Stage.ColorDefinition> = Record<string, C | Record<string, C>>

function convertColors(colors: ColorObject): ColorObject<Stage.Color> {
  const resolvedColors: ColorObject<Stage.Color> = {}

  Object.keys(colors).forEach((key) => {
    if (typeof colors[key] === 'object' && !Array.isArray(colors[key])) {
      resolvedColors[key] = convertColors(
        colors[key] as Record<string, Stage.ColorDefinition>,
      ) as Record<string, Stage.Color>
    } else {
      resolvedColors[key] = Color(colors[key])
    }
  })

  return resolvedColors
}

export default convertColors
