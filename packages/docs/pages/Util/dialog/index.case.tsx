import code from './default.raw'
import custom from './custom.raw'

export const title = 'Dialog'
export const subtitle = 'Function will create dialog in modal'
export const ns = 'DialogTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'With custom content', code: custom },
]
