import code from './default.raw';
import withLoading from './withLoading.raw';

export const title = 'Meter'
export const subtitle = ''
export const ns = 'MeterTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'With loading',
        code: withLoading
    }
]
