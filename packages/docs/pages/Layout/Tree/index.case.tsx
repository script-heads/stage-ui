import code from './default.raw'
import finder from './finder.raw'
import custom from './custom.raw'

export const title = 'Tree'
export const subtitle = ''
export const ns = 'TreeTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Finder',
        code: finder
    },
    {
        label: 'Custom farbica',
        code: custom
    }
]
