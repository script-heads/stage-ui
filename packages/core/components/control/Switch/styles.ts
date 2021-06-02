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
        backgroundColor: theme.color.lightest.hex(),
        transition: 'backgroundColor .15s',
        willChange: 'backgroundColor',
      },
      variant({
        size: {
          xs: [
            {
              width: '1.125rem',
              height: '0.25rem',
              borderRadius: '0.75rem',
            },
          ],
          s: [
            {
              width: '1.5rem',
              height: '0.5rem',
              borderRadius: '1rem',
            },
          ],
          m: [
            {
              width: '1.825rem',
              height: '0.625rem',
              borderRadius: '1.25rem',
            },
          ],
          l: [
            {
              width: '2.25rem',
              height: '0.75rem',
              borderRadius: '1.5rem',
            },
          ],
          xl: [
            {
              width: '3rem',
              height: '1rem',
              borderRadius: '2rem',
            },
          ],
        },
        checked: [
          {
            backgroundColor: theme.color.primary.hex(),
          },
        ],
      }),
      variant({
        disabled: [
          {
            backgroundColor: theme.color.lightest.hex(),
          },
        ],
      }),
    ],
    switch: (variant) => [
      {
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: theme.color.primary.hex(),
        background: theme.color.surface.hex(),
        boxShadow: theme.assets.shadow.m,
        transition: 'left .15s',
        willChange: 'opacity',
      },
      variant({
        size: {
          xs: [
            {
              borderWidth: '0.1rem',
              width: '0.75rem',
              height: '0.75rem',
              left: '-0.1875rem',
            },
            variant({
              checked: [
                {
                  left: '0.1875rem',
                },
              ],
            }),
          ],
          s: [
            {
              borderWidth: '0.1rem',
              width: '1rem',
              height: '1rem',
              left: '-0.25rem',
            },
            variant({
              checked: [
                {
                  left: '0.25rem',
                },
              ],
            }),
          ],
          m: [
            {
              borderWidth: '0.125rem',
              width: '1.25rem',
              height: '1.25rem',
              left: '-0.3125rem',
            },
            variant({
              checked: [
                {
                  left: '0.3125rem',
                },
              ],
            }),
          ],
          l: [
            {
              borderWidth: '0.175rem',
              width: '1.5rem',
              height: '1.5rem',
              left: '-0.375rem',
            },
            variant({
              checked: [
                {
                  left: '0.375rem',
                },
              ],
            }),
          ],
          xl: [
            {
              borderWidth: '0.25rem',
              width: '2rem',
              height: '2rem',
              left: '-0.5rem',
            },
            variant({
              checked: [
                {
                  left: '0.5rem',
                },
              ],
            }),
          ],
        },
        disabled: [
          {
            borderColor: theme.color.lightest.hex(),
          },
        ],
      }),
    ],
  }
}

export default createClasses
