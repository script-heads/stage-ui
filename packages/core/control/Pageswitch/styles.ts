import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => ({
  container: [
    {
      color: theme.color.hard.rgb().string(),
      userSelect: 'none',
    },
  ],
  arrowButton: (state) => [
    {
      ':hover': {
        color: theme.color.primary.rgb().string(),
      },
    },
    state.disabled && {
      cursor: 'not-allowed',
      color: theme.color.lightest.rgb().string(),
      ':hover': {
        color: theme.color.lightest.rgb().string(),
      },
    },
  ],
})

export default createClasses
