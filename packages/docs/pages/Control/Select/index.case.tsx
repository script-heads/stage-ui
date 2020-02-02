import code from './default.raw'
import multiselect from './multiselect.raw'
import keepOpen from './keepOpen.raw'

export const title = 'Select'
export const subtitle = ''
export const ns = 'SelectTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Multiselect',
        code: multiselect
    },
    {
        label: 'Keep open',
        code: keepOpen
    }
]

export { default as test } from './index.test'