import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  const { size = 'm', decoration = 'filled', shape = 'rounded', disabled, uppercase } = props
  const childSpacing = {
    xs: '0.125rem',
    s: '0.25rem',
    m: '0.5rem',
    l: '0.5rem',
    xl: '0.75rem',
  }

  return {
    container: [
      {
        fontWeight: 500,
        whiteSpace: 'nowrap',
        outline: 'none',
        boxShadow: 'unset',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme.radius.m,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        '&:active': {
          borderStyle: 'solid',
        },
        '&::-moz-focus-inner': {
          border: 0,
        },
        '&:hover:not([disabled])': {
          background: theme.color.primary.alpha(0.05).rgb().string(),
        },
        '&:active:not([disabled])': {
          background: theme.color.primary.alpha(0.02).rgb().string(),
        },
        '&:disabled': {
          color: theme.color.light.rgb().string(),
        },
      },
      theme.assets.button[size],
      theme.assets.typography.text[size],
      decoration === 'outline' && {
        borderColor: theme.color.primary.rgb().string(),
        color: theme.color.primary.rgb().string(),
        '&:disabled': {
          borderColor: theme.color.lightest.rgb().string(),
        },
      },
      decoration === 'text' && {
        color: theme.color.onBackground.rgb().string(),
      },
      decoration === 'plain' && {
        borderColor: theme.assets.border.color,
        background: theme.color.surface.rgb().string(),
        color: theme.color.onSurface.rgb().string(),
        '&:disabled': {
          background: theme.color.lightest.rgb().string(),
        },
      },
      decoration === 'filled' && {
        background: theme.color.primary.rgb().string(),
        color: theme.color.onPrimary.rgb().string(),
        '&:disabled': {
          background: theme.color.lightest.rgb().string(),
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
      uppercase && {
        textTransform: 'uppercase',
      },
      styleProps.all,
    ],
    child: (variant, state) => [
      {
        flexGrow: 0,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        ' > span': {
          height: 'auto',
          '> svg': {
            height: theme.assets.typography.text[size].lineHeight,
            width: theme.assets.typography.text[size].lineHeight,
          },
        },
      },
      state.align === 'left' && {
        marginRight: childSpacing[size],
        marginLeft: `-${childSpacing[size]}`,
      },
      state.align === 'right' && {
        marginRight: `-${childSpacing[size]}`,
        marginLeft: childSpacing[size],
      },
    ],
  }
}

export default styles
