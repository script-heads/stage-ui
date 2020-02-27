import code from './default.raw'
import advanced from './advanced.raw'

export const title = 'Menu'
export const subtitle = 'display a list of choices on surfaces'
export const ns = 'MenuTypes'
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
