import Color from 'color'

/**
 * @display Stage.Color
 * @link /props#color
 */

export type ColorNames =
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'yellow50'
  | 'yellow100'
  | 'yellow200'
  | 'yellow300'
  | 'yellow400'
  | 'yellow500'
  | 'yellow600'
  | 'yellow700'
  | 'yellow800'
  | 'yellow900'
  | 'yellowA100'
  | 'yellowA200'
  | 'yellowA400'
  | 'yellowA700'
  | 'orange50'
  | 'orange100'
  | 'orange200'
  | 'orange300'
  | 'orange400'
  | 'orange500'
  | 'orange600'
  | 'orange700'
  | 'orange800'
  | 'orange900'
  | 'orangeA100'
  | 'orangeA200'
  | 'orangeA400'
  | 'orangeA700'
  | 'red50'
  | 'red100'
  | 'red200'
  | 'red300'
  | 'red400'
  | 'red500'
  | 'red600'
  | 'red700'
  | 'red800'
  | 'red900'
  | 'rose50'
  | 'rose100'
  | 'rose200'
  | 'rose300'
  | 'rose400'
  | 'rose500'
  | 'rose600'
  | 'rose700'
  | 'rose800'
  | 'rose900'
  | 'pink50'
  | 'pink100'
  | 'pink200'
  | 'pink300'
  | 'pink400'
  | 'pink500'
  | 'pink600'
  | 'pink700'
  | 'pink800'
  | 'pink900'
  | 'green50'
  | 'green100'
  | 'green200'
  | 'green300'
  | 'green400'
  | 'green500'
  | 'green600'
  | 'green700'
  | 'green800'
  | 'green900'
  | 'lighntGreen50'
  | 'lighntGreen100'
  | 'lighntGreen200'
  | 'lighntGreen300'
  | 'lighntGreen400'
  | 'lighntGreen500'
  | 'lighntGreen600'
  | 'lighntGreen700'
  | 'lighntGreen800'
  | 'lighntGreen900'
  | 'lighntGreenA100'
  | 'lighntGreenA200'
  | 'lighntGreenA400'
  | 'lighntGreenA700'
  | 'limeA100'
  | 'limeA200'
  | 'limeA400'
  | 'limeA700'
  | 'teal50'
  | 'teal100'
  | 'teal200'
  | 'teal300'
  | 'teal400'
  | 'teal500'
  | 'teal600'
  | 'teal700'
  | 'teal800'
  | 'teal900'
  | 'cyan50'
  | 'cyan100'
  | 'cyan200'
  | 'cyan300'
  | 'cyan400'
  | 'cyan500'
  | 'cyan600'
  | 'cyan700'
  | 'cyan800'
  | 'cyan900'
  | 'cyanA100'
  | 'cyanA200'
  | 'cyanA400'
  | 'cyanA700'
  | 'lightBlue50'
  | 'lightBlue100'
  | 'lightBlue200'
  | 'lightBlue300'
  | 'lightBlue400'
  | 'lightBlue500'
  | 'lightBlue600'
  | 'lightBlue700'
  | 'lightBlue800'
  | 'lightBlue900'
  | 'lightBlueA100'
  | 'lightBlueA200'
  | 'lightBlueA400'
  | 'lightBlueA700'
  | 'blue50'
  | 'blue100'
  | 'blue200'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  | 'blue800'
  | 'blue900'
  | 'blueA100'
  | 'blueA200'
  | 'blueA400'
  | 'blueA700'
  | 'indigo50'
  | 'indigo100'
  | 'indigo200'
  | 'indigo300'
  | 'indigo400'
  | 'indigo500'
  | 'indigo600'
  | 'indigo700'
  | 'indigo800'
  | 'indigo900'
  | 'purple50'
  | 'purple100'
  | 'purple200'
  | 'purple300'
  | 'purple400'
  | 'purple500'
  | 'purple600'
  | 'purple700'
  | 'purple800'
  | 'purple900'

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color)
  | (keyof Stage.ColorMain & keyof Stage.ColorCustomPallete)
  | Color
  | (string & { T?: string })
  | ColorNames

function colorProp<V extends ColorProp | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  if (!value) {
    return undefined as V extends undefined ? undefined : Stage.Color
  }

  if (
    typeof value === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.colorsFlat, value as string)
  ) {
    return theme.colorsFlat[value as keyof Stage.Theme['colorsFlat']] as V extends undefined
      ? undefined
      : Stage.Color
  }

  if (typeof value === 'function') {
    return value(theme.color) as V extends undefined ? undefined : Stage.Color
  }

  if (
    typeof value === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.color, 'palette') &&
    theme.color.palette[value as keyof Stage.Theme['color']['palette']]
  ) {
    return theme.color.palette[
      value as keyof Stage.Theme['color']['palette']
    ] as V extends undefined ? undefined : Stage.Color
  }

  return Color(value) as V extends undefined ? undefined : Stage.Color
}

export default colorProp
