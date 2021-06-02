import code from './default.raw'
import custom from './custom.raw'

export const title = 'Calendar'
export const subtitle = ''
export const ns = 'CalendarTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Custom day render',
        code: custom
    }
]
