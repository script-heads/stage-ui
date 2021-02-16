import Color from 'color'
import SystemTypes from '../types'

export default (theme: SystemTypes.Theme, value: SystemTypes.ColorProp) => {
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