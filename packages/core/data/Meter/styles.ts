import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => {
  const color = colorResolver(props.color || theme.color.primary, theme)

  return {
    container: (variant) => [
      {
        position: 'relative',
        minWidth: '1rem',
        alignSelf: 'center',
        userSelect: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        background: theme.color.background.rgb().string(),
        height: `0.75rem`,
        zIndex: 1,
      },
      variant({
        size: {
          xl: { height: '1.25rem' },
          l: { height: '1rem' },
          s: { height: '0.5rem' },
          xs: { height: '0.375rem' },
        },
        shape: {
          round: [
            {
              borderRadius: '100rem',
            },
          ],
        },
        decoration: {
          outline: [
            {
              background: 'transparent',
              borderColor: color.rgb().string(),
            },
          ],
        },
      }),
      styleProps.all,
    ],
    thumb: (variant) => [],
  }
}

export default createClasses
