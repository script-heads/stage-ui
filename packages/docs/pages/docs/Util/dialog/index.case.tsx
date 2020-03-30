import code from './default.raw'
import panel from './panel.raw'
import custom from './custom.raw'

export const title = 'Dialog'
export const subtitle = `creates Modal dialog with user message or custom content. Could be used without JSX in scope.`
export const ns = 'DialogTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Panel', code: panel },
    { label: 'Custom', code: custom },
]
