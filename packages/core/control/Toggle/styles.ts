import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size = 'm', shape = 'rounded', disabled } = props

  return {
    container: [
      {
        position: 'relative',
        whiteSpace: 'nowrap',
        borderRadius: theme.radius[size],
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        alignItems: 'stretch',
        width: 'fit-content',
        height: theme.assets.field[size].height,
        backgroundColor: theme.color.background.rgb().string(),
        borderColor: theme.color.lightest.rgb().string(),
        borderWidth: '1px',
        borderStyle: 'solid',

        '&:disabled': {
          color: theme.color.light.rgb().string(),
        },
        ':before': {
          // zIndex: -1,
          userSelect: 'none',
          color: 'transparent',
          transition: 'all 0.2s',
          position: 'absolute',
          paddingLeft: theme.spacing[size],
          paddingRight: theme.spacing[size],
          height: '100%',
          borderRadius: theme.radius[size],
          backgroundColor: theme.color.surface.rgb().string(),
          borderColor: theme.color.lightest.rgb().string(),
          borderWidth: '1px',
          borderStyle: 'solid',
          margin: '-1px',
        },
      },
      shape === 'square' && {
        borderRadius: 0,
      },
      shape === 'round' && {
        borderRadius: '100rem',
      },
      disabled && {
        cursor: 'not-allowed',
      },
    ],
    option: (state) => [
      theme.assets.typography.text[size],
      {
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing[size],
        paddingRight: theme.spacing[size],
        color: theme.color.hard.rgb().string(),
        cursor: 'pointer',
      },
      state.selected && {
        cursor: 'default',
        color: theme.color.onSurface.rgb().string(),
      },
    ],
  }
}

export default styles
