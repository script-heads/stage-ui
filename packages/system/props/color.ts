/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Color from 'color'

import isUndefined from '../utils/isUndefined'

import type Stage from '../index'

export type ColorProp =
  | ((colors: Stage.Theme['color']) => Color | Stage.ColorNames)
  | Color
  | Stage.ColorNames

type RV<V> = V extends undefined ? undefined : Color

function colorProp<V extends ColorProp | undefined>(value: V, theme: Stage.Theme): RV<V> {
  try {
    if ((value as string)?.[0] === '#' && isUndefined(value)) {
      return Color(value) as RV<V>
    }
    if (value instanceof Color) {
      return value as RV<V>
    }
    if (typeof value === 'function') {
      return colorProp(value(theme.color), theme) as RV<V>
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const [colorName, colorShade] = value?.split(/(\d+)/) as [
      keyof Stage.Colors,
      keyof Stage.ColorShades,
    ]
    if (colorName) {
      if (colorShade) {
        return (theme.color[colorName] as Stage.ColorShades)[colorShade] as RV<V>
      }
      if (theme.color[value as keyof Stage.Colors] instanceof Color) {
        return theme.color[value as keyof Stage.Colors] as RV<V>
      }
      if (theme.color.palette[value as string]) {
        return theme.color.palette[value as string] as RV<V>
      }
    }
    return Color(value) as RV<V>
  } catch (error) {
    return undefined as RV<V>
  }
}

export default colorProp
