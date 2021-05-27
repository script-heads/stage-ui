import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
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
