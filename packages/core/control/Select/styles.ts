import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  { size = 'm', disabled, shape = 'rounded', decoration = 'outline' },
) => {
  const { height } = theme.assets.field[size]

  return {
    drop: [
      {
        position: 'relative',
        background: theme.color.surface.rgb().string(),
        borderRadius: theme.radius.s,
        boxShadow: theme.assets.shadow.l,
        boxSizing: 'border-box',
        overflow: 'hidden',
        top: '0.25rem',
        padding: `calc(${theme.assets.field[size].indent} / 2)`,
      },
      shape === 'square' && {
        borderRadius: 0,
      },
      shape === 'round' && {
        borderRadius: theme.radius.s,
      },
      decoration === 'filled' && [
        {
          boxShadow: 'none',
          top: 0,
          borderColor: 'transparent',
        },
      ],
      decoration === 'underline' && {
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        background: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        backgroundColor: theme.color.surface.rgb().string(),
      },
      decoration === 'none' && {
        borderTopLeftRadius: theme.radius.s,
        borderTopRightRadius: theme.radius.s,
        borderTopWidth: '1px',
      },
    ],

    option: (state) => [
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: theme.radius.s,
        ':hover': {
          color: theme.color.primary.rgb().string(),
          backgroundColor: theme.color.primary.alpha(0.1).rgb().string(),
        },
        padding: `calc(${theme.assets.field[size].indent} / 2)`,
      },
      theme.assets.typography.text[size],
      state.selected && {
        color: theme.color.onPrimary.rgb().string(),
        backgroundColor: theme.color.primary.rgb().string(),
        ':hover': {
          color: theme.color.onPrimary.rgb().string(),
          backgroundColor: theme.color.primary.rgb().string(),
        },
      },
    ],

    selectedArea: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: `calc(${height} / 10) 0`,
    },

    input: (state) => [
      {
        flex: 1,
        outline: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        resize: 'vertical',
        boxShadow: 'none',
        color: 'inherit',
        font: 'inherit',
        cursor: 'inherit',
        textOverflow: 'ellipsis',
        '&::placeholder': {
          color: theme.color.light.rgb().string(),
        },
      },
      state.searchMode && {
        color: theme.color.hard.rgb().string(),
      },
      state.disableEvents && {
        pointerEvents: 'none',
      },
    ],

    multiselectValue: [
      {
        display: 'inline-flex',
        background: disabled
          ? theme.color.lightest.rgb().string()
          : theme.color.primary.alpha(0.2).rgb().string(),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: disabled
          ? theme.color.light.rgb().string()
          : theme.color.primary.rgb().string(),
        borderRadius: `calc(${theme.radius.s} / 2)`,
        boxSizing: 'border-box',
        color: disabled ? theme.color.light.rgb().string() : theme.color.primary.rgb().string(),
        padding: `0 calc(${height} / 5)`,
        margin: `calc(${height} / 20)`,
        marginRight: `calc(${height} / 10)`,
        marginLeft: 0,
        alignItems: 'center',
      },
      shape === 'square' && {
        borderRadius: 0,
      },
      shape === 'round' && {
        borderRadius: '100px',
      },
      decoration === 'filled' && [
        {
          borderColor: 'transparent',
        },
      ],
      decoration === 'underline' && {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        background: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
      },
      decoration === 'none' && {
        background: 'transparent',
      },
    ],

    multiselectValueClose: {
      marginLeft: `calc(${height} / 5)`,
      marginRight: `calc(-${height} / 5)`,
      padding: ` 0 calc(${height} / 20)`,
      borderLeft: '1px solid',
      color: disabled
        ? theme.color.light.rgb().string()
        : theme.color.primary.alpha(0.8).rgb().string(),
      cursor: 'pointer',
      ':hover': {
        color: disabled ? theme.color.light.rgb().string() : theme.color.primary.rgb().string(),
      },
    },

    noOptions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `calc(${height} / 5)`,
    },

    noOptionsText: [
      {
        color: theme.color.light.rgb().string(),
        userSelect: 'none',
      },
      theme.assets.typography.text[size],
    ],
  }
}

export default createClasses
