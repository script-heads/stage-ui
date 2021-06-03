import applyLayoutDecoration from '@stage-ui/core/utils/applyLayoutDecoration'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: (variant) => [
      applyLayoutDecoration(props, theme),
      {
        position: 'relative',
        display: props.inline ? 'inline-flex' : 'flex',
      },
      props.column && {
        flexDirection: 'column',
      },
      styleProps.all,
    ],
  }
}

export default createClasses
