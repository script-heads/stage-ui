import colorProp from '@stage-ui/system/props/color'
import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  const { size = 'm' } = props
  const color = colorProp(props.color, theme) || theme.color.primary
  const typography = theme.assets.typography.text[size || 'm'] || theme.assets.typography.text.m
  const isBlack = color.contrast(theme.color.onPrimary) > 3

  return {
    container: (variant) => [
      {
        fontWeight: 500,
        whiteSpace: 'nowrap',
        outline: 'none',
        boxShadow: 'unset',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
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
        ...theme.assets.button.m,
        ...(theme.assets.typography.text.m as {}),
      },

      variant({
        decoration: {
          outline: [
            {
              borderColor: color.alpha(0.7).rgb().string(),
              color: color.rgb().string(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05).rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02).rgb().string(),
              },
              '&:disabled': {
                borderColor: theme.color.lightest.rgb().string(),
                color: theme.color.light.rgb().string(),
              },
            },
          ],
          text: [
            {
              color: color.rgb().string(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05).rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02).rgb().string(),
              },
              '&:disabled': {
                color: theme.color.light.rgb().string(),
              },
            },
          ],
          plain: [
            {
              borderColor: theme.assets.border.color,
              background: theme.color.surface.rgb().string(),
              color: theme.color.onSurface.rgb().string(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05).rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02).rgb().string(),
              },
              '&:disabled': {
                background: theme.color.lightest.rgb().string(),
                color: theme.color.light.rgb().string(),
              },
            },
          ],
          filled: [
            {
              background: color.rgb().string(),
              color: isBlack ? theme.color.onPrimary.rgb().string() : theme.color.onSurface.rgb().string(),
              '&:hover:not([disabled])': {
                background: isBlack ? color.lighten(0.05).rgb().string() : color.darken(0.05).rgb().string(),
              },
              '&:active:not([disabled])': {
                background: isBlack ? color.lighten(0.1).rgb().string() : color.darken(0.1).rgb().string(),
              },
              '&:disabled': {
                background: theme.color.lightest.rgb().string(),
                color: theme.color.light.rgb().string(),
              },
            },
          ],
        },
        shape: {
          rounded: [
            {
              borderRadius: theme.radius.m,
            },
          ],
          round: [
            {
              borderRadius: '100rem',
            },
          ],
        },
        size: {
          xs: [
            {
              ...theme.assets.button.xs,
              ...(theme.assets.typography.text.xs as {}),
            },
          ],
          s: [
            {
              ...theme.assets.button.s,
              ...(theme.assets.typography.text.s as {}),
            },
          ],
          l: [
            {
              ...theme.assets.button.l,
              ...(theme.assets.typography.text.l as {}),
            },
          ],
          xl: [
            {
              ...theme.assets.button.xl,
              ...(theme.assets.typography.text.xl as {}),
            },
          ],
        },
      }),

      props.disabled && {
        cursor: 'not-allowed',
      },

      props.uppercase && {
        textTransform: 'uppercase',
      },
      styleProps.all,
    ],
    child: (variant) => [
      {
        flexGrow: 0,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        ' > span': {
          height: 'auto',
          '> svg': {
            height: typography.lineHeight,
            width: typography.lineHeight,
          },
        },
      },
      variant({
        align: {
          left: [
            { marginRight: '0.5rem' },
            variant({
              size: {
                xs: { marginRight: '0.125rem', marginLeft: '-0.125rem' },
                s: { marginRight: '0.25rem', marginLeft: '-0.25rem' },
                l: { marginRight: '0.5rem', marginLeft: '-0.5rem' },
                xl: { marginRight: '0.75rem', marginLeft: '-0.75rem' },
              },
            }),
          ],
          right: [
            { marginLeft: '0.5rem' },
            variant({
              size: {
                xs: { marginLeft: '0.125rem', marginRight: '-0.125rem' },
                s: { marginLeft: '0.25rem', marginRight: '-0.25rem' },
                l: { marginLeft: '0.5rem', marginRight: '-0.5rem' },
                xl: { marginLeft: '0.75rem', marginRight: '-0.75rem' },
              },
            }),
          ],
        },
      }),
    ],
  }
}

export default styles
