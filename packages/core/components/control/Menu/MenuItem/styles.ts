import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  }
}

export default createClasses
