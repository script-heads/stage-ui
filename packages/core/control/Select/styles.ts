import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  { size = 'm', disabled },
) => {
  const minHeight = theme.assets.field[size]?.minHeight || '2.5rem'

  return {
    drop: (state) => [
      {
        position: 'relative',
        background: theme.color.surface.rgb().string(),
        borderRadius: theme.radius.s,
        boxShadow: theme.assets.shadow.l,
        boxSizing: 'border-box',
        overflow: 'hidden',
        top: '0.25rem',
        padding: '0.5rem',
      },
      state.shape === 'square' && {
        borderRadius: 0,
      },
      state.shape === 'round' && {
        borderRadius: theme.radius.s,
      },
      state.decoration === 'filled' && [
        {
          boxShadow: 'none',
          top: 0,
          borderColor: 'transparent',
        },
      ],
      state.decoration === 'underline' && {
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        background: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        backgroundColor: theme.color.surface.rgb().string(),
      },
      state.decoration === 'none' && {
        borderTopLeftRadius: theme.radius.s,
        borderTopRightRadius: theme.radius.s,
        borderTopWidth: '1px',
      },
    ],
    dropItem: (state) => [
      theme.assets.typography.text.m,
      theme.assets.field,
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
      },
      theme.assets.typography.text[size],
      theme.assets.field[size],
      state.selected && {
        color: theme.color.onPrimary.rgb().string(),
        backgroundColor: theme.color.primary.rgb().string(),
        ':hover': {
          color: theme.color.onPrimary.rgb().string(),
          backgroundColor: theme.color.primary.rgb().string(),
        },
      },
    ],

    selected: [
      {
        display: 'flex',
        flexWrap: 'wrap',
        margin: `calc(${minHeight} / 10) 0`,
        // marginLeft: 0,
        // marginBottom: `calc(${minHeight} / 5)`,
      },
    ],

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
    tag: (state) => [
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
        padding: `0 calc(${minHeight} / 5)`,
        margin: `calc(${minHeight} / 20)`,
        marginRight: `calc(${minHeight} / 10)`,
        marginLeft: 0,
        alignItems: 'center',
      },
      state.shape === 'square' && {
        borderRadius: 0,
      },
      state.shape === 'round' && {
        borderRadius: `100px`,
      },
      state.decoration === 'filled' && [
        {
          borderColor: 'transparent',
        },
      ],
      state.decoration === 'underline' && {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        background: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
      },
      state.decoration === 'none' && {
        background: 'transparent',
      },
    ],
    tagRemove: () => [
      {
        marginLeft: `calc(${minHeight} / 10)`,
        marginRight: `calc(-${minHeight} / 10)`,
        borderLeft: '1px solid',
        color: disabled
          ? theme.color.light.rgb().string()
          : theme.color.primary.alpha(0.8).rgb().string(),
        cursor: 'pointer',
        ':hover': {
          color: disabled ? theme.color.light.rgb().string() : theme.color.primary.rgb().string(),
        },
      },
    ],
    emptyConteiner: () => [
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `calc(${minHeight} / 5)`,
      },
    ],
    emptyText: () => [
      {
        color: theme.color.light.rgb().string(),
        userSelect: 'none',
      },
      theme.assets.typography.text[size],
    ],
  }
}

export default styles
