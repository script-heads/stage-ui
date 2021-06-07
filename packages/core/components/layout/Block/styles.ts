import applyLayoutDecoration from '@stage-ui/core/utils/applyLayoutDecoration'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  return {
    container: (variant) => [
      applyLayoutDecoration(props, theme),
      {
        position: 'relative',
        overflow: props.overflow,
      },
      styleProps.all,
    ],
  }
}

export default createClasses
