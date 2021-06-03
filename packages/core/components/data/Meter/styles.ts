import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const color = colorResolver(props.color || theme.color.primary, theme)
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
        background: theme.color.background.rgb().string(),
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
