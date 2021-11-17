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

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | string)
  | keyof Stage.ColorMain
  | Color
  | (string & { T?: string })
  | ColorNames

function colorProp<V extends ColorProp | undefined>(
  value: V,
  theme: Stage.Theme,
): V extends undefined ? undefined : Stage.Color {
  const resolvedColor = typeof value === 'function' ? value(theme.color) : value

  if (typeof resolvedColor === 'string') {
    if (theme.color[resolvedColor as keyof Stage.Theme['color']]) {
      return theme.color[resolvedColor as keyof Stage.Theme['color']] as V extends undefined
        ? undefined
        : Stage.Color
    }

    return Color(resolvedColor) as V extends undefined ? undefined : Stage.Color
  }

  return resolvedColor as V extends undefined ? undefined : Stage.Color
}

export default colorProp
