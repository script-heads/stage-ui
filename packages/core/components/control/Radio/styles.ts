import checkStyles from '@stage-ui/core/misc/hocs/Check/styles'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    ...checkStyles(props, theme),
    check: (variant) => [
      {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.color.surface.hex(),
        backgroundColor: theme.color.surface.hex(),
        borderColor: theme.color.light.hex(),
        borderWidth: theme.assets.border.width,
        borderStyle: theme.assets.border.style,
        boxShadow: theme.assets.innerShadow.m,
        borderRadius: '50%',
        transition: 'color .15s, border-color .15s, background-color .15s',
        willChange: 'color, border-color, background-color',
      },
      variant({
        focus: [
          {
            borderColor: theme.color.primary.alpha(0.5).rgb().string(),
          },
        ],
        checked: [
          {
            backgroundColor: theme.color.primary.hex(),
            borderColor: 'transparent',
          },
        ],
        disabled: [
          {
            backgroundColor: theme.color.lightest.hex(),
            borderColor: theme.color.light.hex(),
          },
          variant({
            checked: [
              {
                backgroundColor: theme.color.primary.alpha(0.5).rgb().string(),
                borderColor: 'transparent',
              },
            ],
          }),
        ],
        size: {
          xs: [
            {
              width: '0.75rem',
              height: '0.75rem',
            },
          ],
          s: [
            {
              width: '1rem',
              height: '1rem',
            },
          ],
          m: [
            {
              width: '1.25rem',
              height: '1.25rem',
            },
          ],
          l: [
            {
              width: '1.5rem',
              height: '1.5rem',
            },
          ],
          xl: [
            {
              width: '2rem',
              height: '2rem',
            },
          ],
        },
      }),
    ],
    radio: (variant) => [
      {
        transition: 'all 0.2s',
        transform: `scale(0)`,
        opacity: 0,
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: theme.color.onPrimary.hex(),
      },
      variant({
        checked: [
          {
            transform: `scale(0.5)`,
            opacity: 1,
            transition: 'opacity .15s, transform .15s',
            willChange: 'opacity, transform',
          },
        ],
        size: {
          xs: [{ borderWidth: '0.1rem' }],
          s: [{ borderWidth: '0.125rem' }],
          m: [{ borderWidth: '0.25rem' }],
          l: [{ borderWidth: '0.25rem' }],
          xl: [{ borderWidth: '0.375rem' }],
        },
      }),
    ],
  }
}

export default createClasses
