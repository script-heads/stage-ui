import code from './default.raw';
import withSurface from './withSurface.raw';
import withHover from './withHover.raw';

export const title = 'Block'
export const subtitle = 'Block — minimal layout component. For example this case wrap in block'
export const ns = 'BlockTypes'
export const cases = [
    { label: 'Default', code },
    { label: 'With surface', code: withSurface },
    { label: 'With hover', code: withHover },
]
