import code from './default.raw'
import shadowSurface from './shadowSurface.raw'
import neumorphismSurface from './neumorphismSurface.raw'

export const title = 'Block'
export const subtitle = 'minimal layout component. renders as <div/>'
export const ns = 'BlockTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Shadows', code: shadowSurface },
    { label: 'Neumorphism', code: neumorphismSurface },
]
