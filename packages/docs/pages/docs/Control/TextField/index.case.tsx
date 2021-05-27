import code from './default.raw'
import labelInside from './labelInside.raw'
import withMask from './withMask.raw'
import password from './password.raw'
import textarea from './textarea.raw'

export const title = 'TextField'
export const subtitle = 'allow users to input basic data'
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
    },
    {
        label: 'Textarea',
        code: textarea
    },
    {
        label: 'Visible password',
        code: password
    }
]

export { default as test } from './index.test'