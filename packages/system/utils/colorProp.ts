import Color from 'color'
import SystemTypes from '../types'

export default (theme: SystemTypes.Theme, prop?: SystemTypes.ColorProp) => {
    if (!prop) return undefined

    const sourceColor = typeof prop === 'function'
        ? prop(theme.color)
        : prop

    if (typeof sourceColor === 'string') {
        if (theme.color[sourceColor]) {
            return theme.color[sourceColor]
        }
        if (theme.color.palette[sourceColor]) {
            return theme.color.palette[sourceColor]
        }
        return Color(sourceColor)
    }

    return sourceColor
}