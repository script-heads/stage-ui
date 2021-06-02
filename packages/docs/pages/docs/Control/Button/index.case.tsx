import justButton from './justButton.raw'
import withIcon from './withIcon.raw'

export const title = 'Button'
export const subtitle = 'allow user to take action with a single click'
export const ns = 'ButtonTypes'
export const cases = [
    {
        label: 'Just button',
        code: justButton
    },
    {
        label: 'With icon',
        code: withIcon
    }
]

export { default as test } from './index.test'