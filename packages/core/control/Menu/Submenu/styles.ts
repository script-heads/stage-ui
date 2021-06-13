import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => {
  return {
    container: [
      props.indent && {
        '> [data-flow=menu-item] > span[data-flow-indent]': {
          marginLeft: props.indent,
        },
      },
      styleProps.all,
    ],
  }
}

export default createClasses
