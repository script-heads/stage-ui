import { isBrowser } from '@stage-ui/system'

export default isBrowser && navigator.userAgent.indexOf('AppleWebKit') !== -1
