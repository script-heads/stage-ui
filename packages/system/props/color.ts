import Color from 'color'

/**
 * @display SystemTypes.Color
 * @link /props#color
 */
export type ColorProp =
    ((colors: Stage.Theme['color']) => Color | string)
    | keyof Omit<Stage.Theme['color'], 'palette'>
    | keyof Stage.Theme['color']['palette']
    | Color
    | (string & { T?: string })

export default (theme: Stage.Theme, value: ColorProp) => {
    if (!value) return undefined

    const color = typeof value === 'function'
        ? value(theme.color)
        : value

    if (typeof color === 'string') {
        if (theme.color[color]) {
            return theme.color[color]
        }
        if (theme.color.palette[color]) {
            return theme.color.palette[color]
        }
        return Color(color)
    }

    return color
}