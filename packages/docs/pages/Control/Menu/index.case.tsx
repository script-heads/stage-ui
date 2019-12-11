import code from './default.raw';
import tabs from './tabs.raw';
import vertical from './vertical.raw';

export const title = 'Menu'
export const subtitle = ''
export const ns = 'MenuTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Tabs',
        code: tabs
    },
    {
        label: 'Vertical',
        code: vertical
    }
]
