import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size = 'm', shape = 'rounded', disabled } = props

  return {
    container: [
      {
        position: 'relative',
        whiteSpace: 'nowrap',
        borderRadius: theme.radius[size],
        padding: '0.125rem',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        alignItems: 'stretch',
        width: 'fit-content',
        height: `calc(${theme.assets.field[size].height} - 0.25rem)`,
        backgroundColor: theme.color.background.rgb().string(),
        borderColor: theme.color.gray[200].rgb().string(),
        borderWidth: '1px',
        borderStyle: 'solid',

        '&:disabled': {
          color: theme.color.gray[500].rgb().string(),
        },
        ':before': {
          userSelect: 'none',
          color: 'transparent',
          transition: 'all 0.2s',
          position: 'absolute',
          paddingLeft: `calc(${theme.spacing[size]} / 1.5)`,
          paddingRight: `calc(${theme.spacing[size]} / 1.5)`,
          height: 'calc(100% - 0.25rem)',
          borderRadius: `calc(${theme.radius[size]} / 1.25)`,
          backgroundColor: theme.color.surface.rgb().string(),
          borderColor: theme.color.gray[200].rgb().string(),
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
        paddingLeft: `calc(${theme.spacing[size]} / 1.5)`,
        paddingRight: `calc(${theme.spacing[size]} / 1.5)`,
        height: '100%',
        color: theme.color.gray[600].rgb().string(),
        cursor: 'pointer',
      },
      state.selected && {
        cursor: 'default',
        color: theme.color.black.rgb().string(),
      },
    ],
  }
}

export default styles
