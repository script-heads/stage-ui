import SystemTypes from '@stage-ui/system/types'
import applyLayoutDecoration from '@stage-ui/core/misc/utils/applyLayoutDecoration'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: (variant) => [
      applyLayoutDecoration(props, theme),
      {
        position: 'relative',
        overflow: props.overflow,
      },
    ],
  }
}

export default createClasses
