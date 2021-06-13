import basic from './basic.raw'

export const title = 'Pageswitch'
export const glyph = require(`./Pageswitch.svg`)
export const ns = 'PageswitchTypes'
export const cases = [
  {
    label: 'Basic',
    code: basic,
  },
]

export { default as test } from './index.test'
