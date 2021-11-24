import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => ({
  dateGrid: [
    {
      position: 'relative',
      color: theme.color.text.rgb().string(),
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

  monthOrYear: (state) => [
    {
      transition: 'all 0.2s',
      fontWeight: 500,
      minWidth: '1.5rem',
      height: '1.5rem',
      cursor: 'pointer',
      padding: '0.125rem',
      opacity: 1,
      borderRadius: theme.radius.l,
      color: theme.color.text.rgb().string(),
      userSelect: 'none',
    },
    state.isCurrent && [
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
    state.isActive && [
      {
        background: theme.color.primary.rgb().string(),
        color: theme.color.white.rgb().string(),
        ':after': {
          content: 'none',
        },
        ':hover': {
          background: theme.color.primary.rgb().string(),
        },
      },
    ],

    state.isDisabled && [
      {
        opacity: 0.3,
        ':hover': {
          background: theme.color.background.rgb().string(),
        },
      },
    ],
  ],

  /**
   * Styles for day/month/year squire
   * */
  day: (state) => [
    {
      transition: 'all 0.2s',
      fontWeight: 500,
      minWidth: '1.5rem',
      height: '1.5rem',
      padding: '0.125rem',
      opacity: 0.5,
      borderRadius: '50%',
      color: theme.color.gray[700].rgb().string(),
      userSelect: 'none',
      ':hover': {
        background: theme.color.gray[500].alpha(0.15).string(),
      },
    },
    state.isHidden && [
      {
        display: 'none',
      },
    ],

    //  General styles for day type view
    state.isCurrentMonth && [
      {
        opacity: 1,
        color: theme.color.black.rgb().string(),
        ':hover': {
          background: theme.color.primary.alpha(0.15).string(),
        },
      },
    ],

    state.isWeekend && [
      {
        color: theme.color.error.alpha(0.75).string(),
        ':hover': {
          background: theme.color.error.alpha(0.15).string(),
        },
      },
    ],

    //  Selected one
    state.isActive && [
      {
        background: theme.color.primary.rgb().string(),
        color: theme.color.white.rgb().string(),
        ':hover': {
          background: theme.color.primary.rgb().string(),
        },
        ':after': {
          content: 'none',
        },
      },
      state.isWeekend && [
        {
          background: theme.color.error.rgb().string(),
          ':hover': {
            background: theme.color.error.rgb().string(),
          },
        },
      ],
    ],

    //  Override day styles for week type view
    state.isWeekType && [
      {
        ':hover': {
          background: 'unset',
        },
      },
      state.isActive && [
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
    ],

    //  Today (borders to show current date when switched)
    state.isCurrent && [
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
      state.isWeekend && [
        {
          ':after': {
            borderColor: theme.color.error.rgb().string(),
          },
        },
      ],
    ],

    //  disabled day
    state.isDisabled && [
      {
        opacity: 0.3,
        ':hover': {
          background: theme.color.background.rgb().string(),
        },
      },
    ],
  ],

  /**
   * Styles for week
   * */
  week: (state) => [
    {
      userSelect: 'none',
      gridColumn: 'span 7',
      cursor: 'unset',
    },
    state.isWeekType && [
      {
        overflow: 'hidden',
        borderRadius: theme.radius.xl,
        transition: 'all 0.2s',
        cursor: 'pointer',
        ':hover': {
          background: theme.color.gray[200].alpha(0.25).rgb().string(),
        },
      },
      state.isActive && [
        {
          background: theme.color.gray[200].alpha(0.5).rgb().string(),
        },
      ],
    ],
  ],
})

export default styles
