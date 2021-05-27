import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: [
      {
        willChange: 'scroll-position',
        position: 'fixed',
        zIndex: 300,
      },
    ],
  }
}
export default createClasses
