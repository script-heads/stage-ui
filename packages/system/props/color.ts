import Color from 'color'

/**
 * @display Stage.Color
 * @link /props#color
 */

type ColorNames =
  | 'gray/50'
  | 'gray/100'
  | 'gray/200'
  | 'gray/300'
  | 'gray/400'
  | 'gray/500'
  | 'gray/600'
  | 'gray/700'
  | 'gray/800'
  | 'gray/900'
  | 'yellow/50'
  | 'yellow/100'
  | 'yellow/200'
  | 'yellow/300'
  | 'yellow/400'
  | 'yellow/500'
  | 'yellow/600'
  | 'yellow/700'
  | 'yellow/800'
  | 'yellow/900'
  | 'yellow/A100'
  | 'yellow/A200'
  | 'yellow/A400'
  | 'yellow/A700'
  | 'orange/50'
  | 'orange/100'
  | 'orange/200'
  | 'orange/300'
  | 'orange/400'
  | 'orange/500'
  | 'orange/600'
  | 'orange/700'
  | 'orange/800'
  | 'orange/900'
  | 'orange/A100'
  | 'orange/A200'
  | 'orange/A400'
  | 'orange/A700'
  | 'red/50'
  | 'red/100'
  | 'red/200'
  | 'red/300'
  | 'red/400'
  | 'red/500'
  | 'red/600'
  | 'red/700'
  | 'red/800'
  | 'red/900'
  | 'rose/50'
  | 'rose/100'
  | 'rose/200'
  | 'rose/300'
  | 'rose/400'
  | 'rose/500'
  | 'rose/600'
  | 'rose/700'
  | 'rose/800'
  | 'rose/900'
  | 'pink/50'
  | 'pink/100'
  | 'pink/200'
  | 'pink/300'
  | 'pink/400'
  | 'pink/500'
  | 'pink/600'
  | 'pink/700'
  | 'pink/800'
  | 'pink/900'
  | 'green/50'
  | 'green/100'
  | 'green/200'
  | 'green/300'
  | 'green/400'
  | 'green/500'
  | 'green/600'
  | 'green/700'
  | 'green/800'
  | 'green/900'
  | 'lighntGreen/50'
  | 'lighntGreen/100'
  | 'lighntGreen/200'
  | 'lighntGreen/300'
  | 'lighntGreen/400'
  | 'lighntGreen/500'
  | 'lighntGreen/600'
  | 'lighntGreen/700'
  | 'lighntGreen/800'
  | 'lighntGreen/900'
  | 'lighntGreen/A100'
  | 'lighntGreen/A200'
  | 'lighntGreen/A400'
  | 'lighntGreen/A700'
  | 'lime/A100'
  | 'lime/A200'
  | 'lime/A400'
  | 'lime/A700'
  | 'teal/50'
  | 'teal/100'
  | 'teal/200'
  | 'teal/300'
  | 'teal/400'
  | 'teal/500'
  | 'teal/600'
  | 'teal/700'
  | 'teal/800'
  | 'teal/900'
  | 'cyan/50'
  | 'cyan/100'
  | 'cyan/200'
  | 'cyan/300'
  | 'cyan/400'
  | 'cyan/500'
  | 'cyan/600'
  | 'cyan/700'
  | 'cyan/800'
  | 'cyan/900'
  | 'cyan/A100'
  | 'cyan/A200'
  | 'cyan/A400'
  | 'cyan/A700'
  | 'lightBlue/50'
  | 'lightBlue/100'
  | 'lightBlue/200'
  | 'lightBlue/300'
  | 'lightBlue/400'
  | 'lightBlue/500'
  | 'lightBlue/600'
  | 'lightBlue/700'
  | 'lightBlue/800'
  | 'lightBlue/900'
  | 'lightBlue/A100'
  | 'lightBlue/A200'
  | 'lightBlue/A400'
  | 'lightBlue/A700'
  | 'blue/50'
  | 'blue/100'
  | 'blue/200'
  | 'blue/300'
  | 'blue/400'
  | 'blue/500'
  | 'blue/600'
  | 'blue/700'
  | 'blue/800'
  | 'blue/900'
  | 'blue/A100'
  | 'blue/A200'
  | 'blue/A400'
  | 'blue/A700'
  | 'indigo/50'
  | 'indigo/100'
  | 'indigo/200'
  | 'indigo/300'
  | 'indigo/400'
  | 'indigo/500'
  | 'indigo/600'
  | 'indigo/700'
  | 'indigo/800'
  | 'indigo/900'
  | 'purple/50'
  | 'purple/100'
  | 'purple/200'
  | 'purple/300'
  | 'purple/400'
  | 'purple/500'
  | 'purple/600'
  | 'purple/700'
  | 'purple/800'
  | 'purple/900'

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

  if (typeof value === 'function') {
    return value(theme.color) as V extends undefined ? undefined : Stage.Color
  }

  if (
    typeof value === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.color, value as string)
  ) {
    return theme.color[value as keyof Stage.Theme['color']] as V extends undefined
      ? undefined
      : Stage.Color
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

  if (typeof value === 'string' && value.includes('/')) {
    const name = value.split('/') as (keyof Stage.ColorPallete)[]

    if (theme.color[name[0]] && theme.color[name[0]][name[1]]) {
      return theme.color[name[0]][name[1]]
    }
  }

  return Color(value) as V extends undefined ? undefined : Stage.Color
}

export default colorProp
