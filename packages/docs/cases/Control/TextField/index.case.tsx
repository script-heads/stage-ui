import code from './default.raw';
import withMask from './withMask.raw';

export const title = 'TextField'
export const subtitle = ''
export const ns = 'TextFieldTypes'
export const cases = [
    {
        label: 'Default',
        code
    },
    {
        label: 'With mask',
        code: withMask
    }
]
