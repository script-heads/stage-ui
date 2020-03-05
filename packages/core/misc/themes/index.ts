import FlowTypes from '../../types'

declare global {
	namespace Whale {
        interface Styles extends FlowTypes.Styles {
		}
	}
}

export { default as light } from './light'
export { default as dark } from './dark'