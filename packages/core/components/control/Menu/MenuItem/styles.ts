import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  }
}

export default createClasses
