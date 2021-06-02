import code from './default.raw'
import shadow from './shadow.raw'
import skeleton from './skeleton.raw'

export const title = 'Block'
export const subtitle = 'minimal layout component. renders as <div/>'
export const ns = 'BlockTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Shadows', code: shadow },
    { label: 'Skeleton', code: skeleton },
]
