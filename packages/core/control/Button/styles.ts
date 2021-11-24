import colorProp from '@stage-ui/system/props/color'
import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size = 'm', decoration = 'filled', shape = 'rounded', disabled, uppercase } = props
  const color = colorProp(props.color, theme) || theme.color.primary
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
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: theme.radius.m,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        padding: `0 ${theme.assets.field[size].indent}`,
        height: theme.assets.field[size].height,
        '&::-moz-focus-inner': {
          border: 0,
        },
        '&:hover:not([disabled])': {
          background: color.alpha(0.07).rgb().string(),
        },
        '&:active:not([disabled])': {
          background: color.alpha(0.05).rgb().string(),
        },
        '&:disabled': {
          color: theme.color.light.rgb().string(),
        },
      },
      theme.assets.typography.text[size],
      decoration === 'outline' && {
        borderWidth: '0.0625rem',
        borderColor: color.rgb().string(),
        color: color.rgb().string(),
        '&:disabled': {
          borderColor: theme.color.lightest.rgb().string(),
        },
      },
      decoration === 'text' && {
        borderWidth: 0,
        color: color.rgb().string(),
      },
      decoration === 'plain' && {
        borderWidth: '0.0625rem',
        borderColor: theme.color.lightest.rgb().string(),
        background: theme.color.surface.rgb().string(),
        color: theme.color.onSurface.rgb().string(),
        '&:disabled': {
          background: theme.color.lightest.rgb().string(),
        },
      },
      decoration === 'filled' && {
        background: color.rgb().string(),
        color:
          color.contrast(theme.color.onPrimary) > 3
            ? theme.color.onPrimary.rgb().string()
            : theme.color.onSurface.rgb().string(),
        '&:hover:not([disabled])': {
          background: color.alpha(0.7).rgb().string(),
        },
        '&:active:not([disabled])': {
          background: color.alpha(0.5).rgb().string(),
        },
        '&:disabled': {
          background: theme.color.lightest.rgb().string(),
          color: theme.color.light.rgb().string(),
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
    ],
    child: (state) => [
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
      },
      state.align === 'right' && {
        marginLeft: childSpacing[size],
      },
    ],
  }
}

export default styles
