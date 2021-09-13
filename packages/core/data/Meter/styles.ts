import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const color = colorResolver(props.color || theme.color.primary, theme)

  return {
    container: (variant) => [
      {
        position: 'relative',
        minWidth: '0.25rem',
        alignSelf: 'center',
        userSelect: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        background: theme.color.backgroundVariant.rgb().string(),
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
    ],
    thumb: (variant) => [],
  }
}

export default createClasses
