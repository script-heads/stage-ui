import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    dateGrid: [
      {
        position: 'relative',
        color: theme.color.onSurface.hex(),
      },
    ],

    weekDay: [
      {
        userSelect: 'none',
        ...(theme.assets.typography.text.m as {}),
        marginTop: '0.25rem',
        marginBottom: '0.5rem',
        fontWeight: 500,
      },
    ],

    title: [
      {
        color: theme.color.onSurface.hex(),
        padding: '0.25rem',
      },
    ],

    /**
     * Styles for day/month/year squire
     */
    day: (variant) => [
      {
        transition: 'all 0.2s',
        fontWeight: 400,
        minWidth: '2rem',
        height: '2rem',
        cursor: 'pointer',
        margin: '0.125rem',
        opacity: 1,
        background: theme.color.background.hex(),
        borderWidth: theme.assets.border.width,
        borderStyle: theme.assets.border.style,
        borderColor: theme.color.surface.hex(),
        borderRadius: theme.radius.s,
        color: theme.color.hardest.hex(),
        userSelect: 'none',
        ...theme.assets.typography.text.m,
        ':hover': {
          background: theme.color.lightest.hex(),
        },
      },
      variant({
        isCurrent: [
          {
            borderColor: theme.color.primary.hex(),
          },
        ],
        isDisabled: [
          {
            opacity: 0.3,
            ':hover': {
              background: theme.color.background.hex(),
            },
          },
        ],
        isCurrentMonth: [
          {
            color: theme.color.onSurface.hex(),
            background: theme.color.surface.hex(),
          },
        ],
        isActive: [
          {
            background: theme.color.primary.hex(),
            color: theme.color.onPrimary.hex(),
            ':hover': {
              background: theme.color.primary.hex(),
            },
          },
        ],
      }),
    ],
  }
}

export default createClasses
