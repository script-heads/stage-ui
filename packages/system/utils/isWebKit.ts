import isBrowser from './isBrowser'

export default isBrowser && navigator.userAgent.indexOf('AppleWebKit') !== -1
