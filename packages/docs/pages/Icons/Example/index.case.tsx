import code from './default.raw'
import rotate from './rotate.raw'
import shapes from './shapes.raw'

export const title = 'Icon example'
export const subtitle = 'icons improves user experience'
export const ns = 'IconTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Shapes', code: shapes },
    { label: 'Rotate', code: rotate },
]