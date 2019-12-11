import code from './default.raw';
import custom from './custom.raw';

export const title = 'Notify'
export const subtitle = 'Function will create notification view in portal'
export const ns = 'NotifyTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'With custom content', code: custom },
]
