import colorResolver from '@stage-ui/system/resolvers/color'
import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  const color = colorResolver(theme, props.color || theme.color.primary)
  const field = theme.assets.field[props.size || 'm'] || theme.assets.field.m

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
        background: theme.color.background.hex(),
        minHeight: `calc(${field.minHeight} / 4)`,
        zIndex: 1,
      },
      variant({
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
              borderColor: color.hex(),
            },
          ],
        },
      }),
    ],
    thumb: (variant) => [],
  }
}

export default createClasses
