import FlowTypes from '../../types'

declare global {
    namespace System {
        interface Overrides extends FlowTypes.Overrides { }
    }
}

export { default as light } from './light'
export { default as dark } from './dark'