import FlowTypes from '../../types'

declare global {
    namespace Stage {
        interface ThemeOverrides extends FlowTypes.Overrides { }
    }
}

export { default as light } from './light'
export { default as dark } from './dark'