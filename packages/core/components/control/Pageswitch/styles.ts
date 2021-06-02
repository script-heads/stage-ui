import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: [
      {
        color: theme.color.hard.hex(),
        userSelect: 'none',
      },
    ],
    arrowButton: (variant) => [
      {
        color: theme.color.hardest.hex(),
        ':hover': {
          color: theme.color.primary.hex(),
        },
      },
      variant({
        disabled: {
          cursor: 'not-allowed',
          color: theme.color.lightest.hex(),
          ':hover': {
            color: theme.color.lightest.hex(),
          },
        },
      }),
    ],
  }
}

export default createClasses
