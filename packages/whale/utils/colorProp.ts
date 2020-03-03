import Color from 'color'
import WhaleTypes from '../types'

export default (theme: WhaleTypes.Theme, prop?: WhaleTypes.ColorProp) => {
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