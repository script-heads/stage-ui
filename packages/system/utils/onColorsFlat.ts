import Color from 'color'
import { ThemeDefiniton } from './createTheme'
import { ColorNames } from '../props/color'

const onColorsFlat = (colorList: ThemeDefiniton['main']['color']) => {
  const colors: Record<string, Stage.Color> = {}

  Object.keys(colorList).forEach((colorKey) => {
    if (typeof colorList[colorKey] === 'string' || Array.isArray(colorList[colorKey])) {
      Object.assign(colors, {
        [colorKey as keyof Stage.ColorMain]: Color(colorList[colorKey] as Stage.Color),
      })
    } else {
      Object.keys(colorList[colorKey]).forEach((key) => {
        Object.assign(colors, {
          [`${colorKey}${key}` as ColorNames]: Color(
            (colorList[colorKey] as string)[key] as Stage.Color,
          ),
        })
      })
    }
  })

  return colors as Record<keyof Stage.ColorMain, Stage.Color> & Record<ColorNames, Stage.Color>
}

export default onColorsFlat
