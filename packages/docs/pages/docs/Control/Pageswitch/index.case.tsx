import code from './default.raw'

export const title = 'Pageswitch'
export const subtitle = 'allow users switch page on <Table/> for example'
export const ns = 'PageswitchTypes'
export const cases = [
    {
        label: 'Default',
        code
    }
]

export { default as test } from './index.test'