import Types from './types'

const createClasses: Stage.CreateAdditionalClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: (variant) => styleProps.all,
    check: (variant) => [
      {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.color.surface.rgb().string(),
        backgroundColor: theme.color.surface.rgb().string(),
        borderColor: theme.color.light.rgb().string(),
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
            backgroundColor: theme.color.primary.rgb().string(),
            borderColor: 'transparent',
          },
        ],
        disabled: [
          {
            backgroundColor: theme.color.lightest.rgb().string(),
            borderColor: theme.color.light.rgb().string(),
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
        backgroundColor: theme.color.onPrimary.rgb().string(),
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

export default createClasses as Stage.CreateClasses<Types.Styles, Types.Props>
