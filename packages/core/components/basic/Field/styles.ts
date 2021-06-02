import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props) => {
  const color = colorResolver(props.color || theme.color.light, theme)

  return {
    container: (variant) => [
      {
        position: 'relative',
        display: 'flex',
        minWidth: '1rem',
        flex: 1,
        flexDirection: 'column',
        outline: 'none',
      },
    ],

    field: (variant) => [
      {
        position: 'relative',
        flexShrink: 0,
        flexGrow: 1,
        background: theme.color.surface.string(),
        borderColor: theme.color.lightest.string(),
        borderRadius: theme.radius.s,
        boxShadow: theme.assets.innerShadow.xs,
        borderWidth: '1px',
        borderStyle: 'solid',
        outline: 'none',
        display: 'flex',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        transition: 'border 0.125s',
      },
      theme.assets.field.m,
      theme.assets.typography.text.m,
      variant({
        shape: {
          square: {
            borderRadius: 0,
          },
          round: [
            {
              borderRadius: `calc(${theme.assets.field.m.minHeight}/2)`,
            },
            variant({
              size: {
                xl: { borderRadius: `calc(${theme.assets.field.xl.minHeight}/2)` },
                l: { borderRadius: `calc(${theme.assets.field.l.minHeight}/2)` },
                s: { borderRadius: `calc(${theme.assets.field.s.minHeight}/2)` },
                xs: { borderRadius: `calc(${theme.assets.field.xs.minHeight}/2)` },
              },
            }),
          ],
        },
        size: {
          xs: [theme.assets.field.xs, theme.assets.typography.text.xs],
          s: [theme.assets.field.s, theme.assets.typography.text.s],
          l: [theme.assets.field.l, theme.assets.typography.text.l],
          xl: [theme.assets.field.xl, theme.assets.typography.text.xl],
        },
        focus: {
          borderColor: props.disabled ? theme.color.lightest.string() : theme.color.primary.alpha(0.5).string(),
        },
        disabled: {
          color: theme.color.light.hex(),
          cursor: 'not-allowed',
        },
        decoration: {
          outline: [
            variant({
              disabled: [
                {
                  background: theme.color.lightest.hex(),
                },
              ],
            }),
          ],
          filled: [
            {
              borderColor: 'transparent',
            },
            variant({
              disabled: [
                {
                  background: theme.color.lightest.hex(),
                },
              ],
            }),
          ],
          underline: {
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            background: 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
          },
          none: {
            background: 'transparent',
            borderColor: 'transparent',
          },
        },
      }),
    ],

    content: (variant) => [
      {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      },
    ],

    label: (variant) => [
      {
        color: theme.color.hard.hex(),
        display: 'flex',
        userSelect: 'none',
        paddingBottom: '0.25rem',
      },
      theme.assets.typography.text.s,
      variant({
        size: {
          xs: [theme.assets.typography.text.xs],
          s: [theme.assets.typography.text.xs],
          l: [theme.assets.typography.text.m],
          xl: [theme.assets.typography.text.l],
        },
        labelType: {
          inside: [
            {
              lineHeight: 0.7,
              fontSize: '0.85rem',
              paddingTop: '0.25rem',
            },
            variant({
              size: {
                xs: {
                  fontSize: '0.5rem',
                  lineHeight: 0.2,
                },
                s: {
                  fontSize: '0.625rem',
                  lineHeight: 0.6,
                  paddingTop: '0.125rem',
                },
                l: {
                  fontSize: '1rem',
                  lineHeight: 0.8,
                },
                xl: {
                  fontSize: '1.25rem',
                  lineHeight: 1,
                },
              },
            }),
          ],
        },
      }),
    ],

    child: (variant) => [
      {
        color: color.hex(),
        flexGrow: 0,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
      },
      variant({
        align: {
          left: [
            {
              marginRight: '.375rem',
            },
            variant({
              size: {
                xs: { marginRight: '.125rem' },
                s: { marginRight: '.25rem' },
                l: { marginRight: '.5rem' },
                xl: { marginRight: '.75rem' },
              },
            }),
          ],
          right: [
            {
              marginLeft: '.375rem',
            },
            variant({
              size: {
                xs: { marginLeft: '.125rem' },
                s: { marginLeft: '.25rem' },
                l: { marginLeft: '.5rem' },
                xl: { marginLeft: '.75rem' },
              },
            }),
          ],
        },
      }),
    ],

    clearButton: (variant) => [
      {
        cursor: 'pointer',
        backgroundColor: theme.color.onSurface.alpha(0.05).rgb().string(),
        borderRadius: '100rem',
        transition: 'transform 0.25s',
        ':hover': {
          color: theme.color.warning.hex(),
          transform: 'scale(1.2)',
        },
        ':active': {
          transform: 'scale(1.1)',
          opacity: 0.8,
        },
      },
    ],

    hint: (variant) => [
      {
        paddingTop: '.25rem',
        paddingLeft: props.decoration !== 'underline' ? '.25rem' : '',
        color: color.hex(),
        ...theme.assets.typography.text.m,
      },
      variant({
        size: {
          s: [theme.assets.typography.text.s],
          xs: [theme.assets.typography.text.xs],
        },
      }),
    ],
    error: (variant) => [
      {
        paddingTop: '.25rem',
        paddingLeft: props.decoration !== 'underline' ? '.25rem' : '',
        color: color?.hex() || theme.color.error.hex(),
        ...theme.assets.typography.text.m,
        ' svg': {
          color: theme.color.error.string(),
          marginTop: '-0.125rem',
          marginRight: '0.25rem',
          ...theme.assets.typography.text.m,
        },
      },
      variant({
        size: {
          s: [
            {
              ...theme.assets.typography.text.s,
              ' svg': {
                marginTop: '-0.125rem',
                marginRight: '0.125rem',
                ...theme.assets.typography.text.s,
              },
            },
          ],
          xs: [
            {
              ...theme.assets.typography.text.xs,
              ' svg': {
                marginRight: '0.125rem',
                ...theme.assets.typography.text.xs,
              },
            },
          ],
        },
      }),
    ],
  }
}

export default createClasses
