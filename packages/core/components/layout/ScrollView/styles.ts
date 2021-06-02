import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const color = colorResolver(props.color || theme.color.onBackground, theme)

  return {
    wrapper: [
      {
        position: 'relative',
        height: '100%',
        width: '100%',
      },
      styleProps.all,
    ],
    container: [
      {
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        padding: '0 !important',
        margin: '0 !important',
      },
    ],
    content: [
      {
        position: 'relative',
        /**
         * causing issue with
         * crop content
         */
        height: 'fit-content',
        minWidth: '100%',
        minHeight: '100%',
        willChange: 'left, top',
        '> :nth-of-type(n)': {
          margin: '0 !important',
        },
      },
    ],
    webkit: [
      {
        position: 'relative',
        overflow: 'auto',
        height: '100%',
        maxHeight: 'inherit',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      },
      styleProps.all,
    ],
    yBar: (variant) => [
      {
        zIndex: 999,
        position: 'absolute',
        top: 0,
        right: 0,
        width: '0.5rem',
        borderRadius: '5rem',
        backgroundColor: color.alpha(0.1).rgb().string(),
        transition: 'opacity 0.5s',
        willChange: 'opacity',
        opacity: 0,
        ':hover': {
          opacity: 1,
          '> span': { opacity: 0.4 },
        },
      },
      variant({
        active: [{ opacity: 1 }],
        size: {
          xs: [
            {
              width: '0.25rem',
            },
          ],
          s: [
            {
              width: '0.375rem',
            },
          ],
          l: [
            {
              width: '0.625rem',
            },
          ],
          xl: [
            {
              width: '0.75rem',
            },
          ],
        },
        shape: {
          square: [
            {
              borderRadius: 0,
            },
          ],
        },
        position: {
          none: {
            display: 'none',
          },
          left: [
            {
              right: 'auto',
              left: 0,
            },
          ],
        },
      }),
    ],
    yThumb: (variant) => [
      {
        zIndex: 999,
        display: 'block',
        width: '0.5rem',
        height: '100%',
        borderRadius: '1rem',
        backgroundColor: color.hex(),
        opacity: 0,
        transition: 'opacity 0.5s',
        willChange: 'opacity',
      },
      variant({
        active: [{ opacity: 0.4 }],
        size: {
          xs: [
            {
              width: '0.25rem',
            },
          ],
          s: [
            {
              width: '0.375rem',
            },
          ],
          l: [
            {
              width: '0.625rem',
            },
          ],
          xl: [
            {
              width: '0.75rem',
            },
          ],
        },
        shape: {
          square: [
            {
              borderRadius: 0,
            },
          ],
        },
      }),
    ],
    xBar: (variant) => [
      {
        zIndex: 999,
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '0.5rem',
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: color.alpha(0.1).rgb().string(),
        transition: 'opacity 0.5s',
        willChange: 'opacity',
        opacity: 0,
        ':hover': {
          opacity: 1,
          '> span': { opacity: 0.4 },
        },
      },
      variant({
        active: [{ opacity: 1 }],
        size: {
          xs: [
            {
              height: '0.25rem',
            },
          ],
          s: [
            {
              height: '0.5rem',
            },
          ],
          l: [
            {
              height: '1rem',
            },
          ],
          xl: [
            {
              height: '1.25rem',
            },
          ],
        },
        shape: {
          square: [
            {
              borderRadius: 0,
            },
          ],
        },
        position: {
          none: {
            display: 'none',
          },
          top: [
            {
              bottom: 'auto',
              top: 0,
            },
          ],
        },
      }),
    ],
    xThumb: (variant) => [
      {
        zIndex: 999,
        display: 'block',
        height: '0.5rem',
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: color.hex(),
        opacity: 0,
        transition: 'opacity 0.5s',
        willChange: 'opacity',
      },
      variant({
        active: [{ opacity: 0.4 }],
        size: {
          xs: [
            {
              height: '0.25rem',
            },
          ],
          s: [
            {
              height: '0.5rem',
            },
          ],
          l: [
            {
              height: '1rem',
            },
          ],
          xl: [
            {
              height: '1.25rem',
            },
          ],
        },
        shape: {
          square: [
            {
              borderRadius: 0,
            },
          ],
        },
      }),
    ],
  }
}

export default createClasses
