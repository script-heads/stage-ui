import custom from './custom.raw'
import code from './default.raw'

export const title = 'Notify'
export const subtitle = `creates popsup notification with user message or custom content. \nCould be used without JSX in scope.`
export const ns = 'NotifyTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Custom render', code: custom },
]
