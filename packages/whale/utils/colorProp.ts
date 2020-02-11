import Color from 'color'
import WhaleTypes from '../types'

export default (prop: WhaleTypes.SourceColorProp | undefined, colors: WhaleTypes.Theme['color']) => {
    if (!prop) return undefined
    
    const sourceColor = typeof prop === 'function'
        ? prop(colors)
        : prop
    
    if (typeof sourceColor === 'string') return Color(sourceColor)

    return sourceColor
}