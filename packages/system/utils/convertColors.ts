import Color from 'color'
import { ThemeDefiniton } from './createTheme'

function convertColors(colors: ThemeDefiniton['main']['color']): Stage.Colors {
  const resolvedColors = {} as Stage.Colors

  Object.keys(colors).forEach((key) => {
    if (typeof colors[key] === 'object') {
      resolvedColors[key] = convertColors(colors[key])
    }

    if (typeof colors[key] === 'string' || Array.isArray(colors[key])) {
      resolvedColors[key] = Color(colors[key])
    }
  })

  return resolvedColors
}

export default convertColors
