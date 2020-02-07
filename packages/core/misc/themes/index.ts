import FlowTypes from '../../types'

declare global {
	namespace Whale {
        interface Overrides extends FlowTypes.Overrides {
		}
	}
}

export { default as light } from './light'
export { default as dark } from './dark'