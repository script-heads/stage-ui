import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = ({
  color,
  spacing,
  assets,
}) => ({
  container: [
    {
      color: color.hard.rgb().string(),
      userSelect: 'none',
      alignItems: 'center',
    },
  ],
  arrowButton: (state) => [
    {
      color: color.hard.rgb().string(),
      ':hover': {
        color: color.primary.rgb().string(),
      },
    },
    state.disabled && {
      cursor: 'not-allowed',
      color: color.light.rgb().string(),
      ':hover': {
        color: color.light.rgb().string(),
      },
    },
  ],
  separator: {
    color: color.light.rgb().string(),
  },
  pageButton: (state) => [
    {
      transition: 'background-color 0.25s',
      color: state.current ? color.onPrimary.hex() : color.hard.hex(),
      marginRight: spacing.xs,
      marginLeft: spacing.xs,
      padding: spacing.s,
      boxShadow: state.current ? assets.shadow.m : 'none',
      borderRadius: '10rem',
      backgroundColor: color.primary
        .alpha(state.current ? 1 : 0)
        .rgb()
        .string(),
      ':hover': {
        color: state.current ? color.onPrimary.hex() : color.primary.hex(),
        backgroundColor: color.primary
          .alpha(state.current ? 1 : 0.1)
          .rgb()
          .string(),
      },
    },
  ],
  pageButtonText: () => [
    assets.typography.text.m,
    {
      fontWeight: 500,
      textAlign: 'center',
      minWidth: '1.25rem',
    },
  ],
})

export default createClasses
