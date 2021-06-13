import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => {
  return {
    container: [styleProps.all],
  }
}

export default createClasses
