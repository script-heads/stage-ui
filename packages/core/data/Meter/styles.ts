import colorResolver from '@stage-ui/system/props/color'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const color = colorResolver(props.color || theme.color.primary, theme)

  const isDark = theme.color.surface.isDark()
  const backgroundColor = isDark
    ? theme.color.surface.lighten(0.5).hex()
    : theme.color.surface.darken(0.1).hex()

  return {
    container: (state) => [
      {
        position: 'relative',
        minWidth: '0.25rem',
        alignSelf: 'center',
        userSelect: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundColor,
        zIndex: 1,
      },
      state.shape === 'round' && [
        {
          borderRadius: '100rem',
        },
      ],
      state.decoration === 'outline' && [
        {
          background: 'transparent',
          borderColor: color.rgb().string(),
        },
      ],
    ],
    thumbWrapper: {
      position: 'relative',
    },
    thumb: () => [],
  }
}

export default createClasses
