import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = ({
  color,
  spacing,
  assets,
}) => ({
  container: [
    {
      color: color.gray[600].rgb().string(),
      userSelect: 'none',
      alignItems: 'center',
    },
  ],
  arrowButton: (state) => [
    {
      color: color.gray[600].rgb().string(),
      ':hover': {
        color: color.primary.rgb().string(),
      },
    },
    state.disabled && {
      cursor: 'not-allowed',
      color: color.gray[500].rgb().string(),
      ':hover': {
        color: color.gray[500].rgb().string(),
      },
    },
  ],
  separator: {
    color: color.gray[500].rgb().string(),
  },
  pageButton: (state) => [
    {
      transition: 'background-color 0.25s',
      color: state.current ? color.white.hex() : color.gray[600].hex(),
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
        color: state.current ? color.white.hex() : color.primary.hex(),
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
