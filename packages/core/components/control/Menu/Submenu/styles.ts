import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: [
      props.indent && {
        '> [data-flow=menu-item] > span[data-flow-indent]': {
          marginLeft: props.indent,
        },
      },
    ],
  }
}

export default createClasses
