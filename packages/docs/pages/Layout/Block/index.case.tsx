import code from './default.raw'
import shadowSurface from './shadowSurface.raw'
import neumorphismSurface from './neumorphismSurface.raw'

export const title = 'Block'
export const subtitle = 'Block — minimal layout component. For example this case wrap in block'
export const ns = 'BlockTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Shadows', code: shadowSurface },
    { label: 'Neumorphism', code: neumorphismSurface },
]
