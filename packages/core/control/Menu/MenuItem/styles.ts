import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => ({
  container: [
    {
      textDecoration: 'inherit',
      color: 'inherit',
    },
    styleProps.all,
  ],
})

export default createClasses
