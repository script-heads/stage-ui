import code from './default.raw'
import custom from './custom.raw'

export const title = 'Dialog'
export const subtitle = `Utility function that creates Modal dialog with user message or custom content. Could be used without JSX in scope.`
export const ns = 'DialogTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Custom', code: custom },
]
