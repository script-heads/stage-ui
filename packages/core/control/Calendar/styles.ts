import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => {
  return {
    dateGrid: [
      {
        position: 'relative',
        color: theme.color.onSurface.rgb().string(),
      },
    ],

    weekDay: [
      {
        ...theme.assets.typography.text.m,
        userSelect: 'none',
        marginTop: '0.25rem',
        marginBottom: '0.5rem',
        fontWeight: 500,
        textAlign: 'center',
      },
    ],

    monthOrYear: (variant) => [
      {
        transition: 'all 0.2s',
        fontWeight: 500,
        minWidth: '1.5rem',
        height: '1.5rem',
        cursor: 'pointer',
        padding: '0.125rem',
        opacity: 1,
        borderRadius: theme.radius.l,
        color: theme.color.onSurface.rgb().string(),
        userSelect: 'none',
      },
      variant({
        isCurrent: [
          {
            ':after': {
              content: `''`,
              padding: '0.25rem',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              borderColor: theme.color.primary.rgb().string(),
              borderWidth: '2px',
              borderStyle: theme.assets.border.style,
              borderRadius: theme.radius.l,
            },
          },
        ],

        //  selected day
        isActive: [
          {
            background: theme.color.primary.rgb().string(),
            color: theme.color.onPrimary.rgb().string(),
            ':after': {
              content: 'none',
            },
            ':hover': {
              background: theme.color.primary.rgb().string(),
            },
          },
        ],

        isDisabled: [
          {
            opacity: 0.3,
            ':hover': {
              background: theme.color.background.rgb().string(),
            },
          },
        ],
      }),
    ],

    /**
     * Styles for day/month/year squire
     * */
    day: (variant) => [
      {
        transition: 'all 0.2s',
        fontWeight: 500,
        minWidth: '1.5rem',
        height: '1.5rem',
        padding: '0.125rem',
        opacity: 0.5,
        borderRadius: '50%',
        color: theme.color.hardest.rgb().string(),
        userSelect: 'none',
        ':hover': {
          background: theme.color.light.alpha(0.15).string(),
        },
      },
      variant({
        isHidden: [
          {
            display: 'none',
          },
        ],

        //  General styles for day type view
        isCurrentMonth: [
          {
            opacity: 1,
            color: theme.color.onSurface.rgb().string(),
            ':hover': {
              background: theme.color.primary.alpha(0.15).string(),
            },
          },
        ],

        isWeekend: [
          {
            color: theme.color.error.alpha(0.75).string(),
            ':hover': {
              background: theme.color.error.alpha(0.15).string(),
            },
          },
        ],

        //  Selected one
        isActive: [
          {
            background: theme.color.primary.rgb().string(),
            color: theme.color.onPrimary.rgb().string(),
            ':hover': {
              background: theme.color.primary.rgb().string(),
            },
            ':after': {
              content: 'none',
            },
          },
          variant({
            isWeekend: [
              {
                background: theme.color.error.rgb().string(),
                ':hover': {
                  background: theme.color.error.rgb().string(),
                },
              },
            ],
          }),
        ],

        //  Override day styles for week type view
        isWeekType: [
          {
            ':hover': {
              background: 'unset',
            },
          },
          variant({
            isActive: [
              {
                background: 'unset',
                color: 'unset',
                ':hover': {
                  background: 'unset',
                },
                ':after': {
                  content: 'none',
                },
              },
            ],
          }),
        ],

        //  Today (borders to show current date when switched)
        isCurrent: [
          {
            ':after': {
              content: `''`,
              padding: '0.25rem',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              borderColor: theme.color.primary.rgb().string(),
              borderWidth: '2px',
              borderStyle: theme.assets.border.style,
              borderRadius: '50%',
            },
          },
          variant({
            isWeekend: [
              {
                ':after': {
                  borderColor: theme.color.error.rgb().string(),
                },
              },
            ],
          }),
        ],

        //  disabled day
        isDisabled: [
          {
            opacity: 0.3,
            ':hover': {
              background: theme.color.background.rgb().string(),
            },
          },
        ],
      }),
    ],

    /**
     * Styles for week
     * */
    week: (variant) => [
      {
        userSelect: 'none',
        gridColumn: 'span 7',
        cursor: 'unset',
      },
      variant({
        isWeekType: [
          {
            overflow: 'hidden',
            borderRadius: theme.radius.xl,
            transition: 'all 0.2s',
            cursor: 'pointer',
            ':hover': {
              background: theme.color.lightest.alpha(0.25).rgb().string(),
            },
          },
          variant({
            isActive: [
              {
                background: theme.color.lightest.alpha(0.5).rgb().string(),
              },
            ],
          }),
        ],
      }),
    ],
  }
}

export default styles
