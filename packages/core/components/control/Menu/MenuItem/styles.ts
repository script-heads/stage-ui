import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: [
      {
        textDecoration: 'inherit',
        color: 'inherit',
      },
      styleProps.all,
    ],
  }
}

export default createClasses
