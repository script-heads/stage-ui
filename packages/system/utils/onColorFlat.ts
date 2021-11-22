import Color from 'color'
import { ThemeDefiniton } from './createTheme'

const onColorFlat = (colorList: ThemeDefiniton['main']['color']) => {
  const colors: Record<string, Stage.Color> = {}

  Object.keys(colorList).forEach((colorKey) => {
    if (typeof colorList[colorKey] === 'string') {
      Object.assign(colors, { [colorKey]: Color(colorList[colorKey] as Stage.Color) })
    } else {
      Object.keys(colorList[colorKey]).forEach((key) => {
        Object.assign(colors, {
          [`${colorKey}${key}`]: Color(
            (colorList[colorKey] as keyof Stage.Color)[key] as Stage.Color,
          ),
        })
      })
    }
  })

  return colors
}

export default onColorFlat
