import code from './default.raw'
import labelInside from './labelInside.raw'
import withMask from './withMask.raw'

export const title = 'TextField'
export const subtitle = ''
export const ns = 'TextFieldTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Label inside',
        code: labelInside
    },
    {
        label: 'With mask',
        code: withMask
    }
]

export { default as test } from './index.test'