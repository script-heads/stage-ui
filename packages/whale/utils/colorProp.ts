import Color from 'color'
import WhaleTypes from '../types'

export default (theme: WhaleTypes.Theme, prop?: WhaleTypes.ColorProp) => {
    if (!prop) return undefined
    
    const sourceColor = typeof prop === 'function'
        ? prop(theme.color)
        : prop
    
    if (typeof sourceColor === 'string') return Color(sourceColor)

    return sourceColor
}