import code from './default.raw'
import advanced from './advanced.raw'

export const title = 'Meter'
export const subtitle = 'displays progres data bar'
export const ns = 'MeterTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Advanced',
        code: advanced
    }
]
