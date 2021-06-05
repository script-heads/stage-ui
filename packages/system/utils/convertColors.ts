import Color from 'color'

function convertColors<Colors extends Object>(colors: Colors): Record<keyof Colors, Stage.Color> {
  const resolvedColors = {} as Record<keyof Colors, Stage.Color>

  Object.keys(colors).forEach((key) => {
    resolvedColors[key] = Color(colors[key])
  })

  return resolvedColors
}

export default convertColors
