import colorResolver from '@stage-ui/system/props/color'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { value = 0, shape = 'round', size = 'm', fontSize: fontSizeProp } = props
  const color = colorResolver(props.color || theme.color.primary, theme)
  const strokeBackground = colorResolver(
    props.strokeBackgroundColor || theme.color.gray[200],
    theme,
  )

  const fontSize = (fontSizeProp ||
    theme.assets.typography.text[size as Stage.Sizes]?.fontSize ||
    (size && `calc(${size} / 2)`) ||
    theme.assets.typography.text.m.fontSize ||
    '1rem') as string

  const fontWeight = (theme.assets.typography.text[size as Stage.Sizes]?.fontWeight ||
    theme.assets.typography.text.m.fontWeight ||
    600) as string

  return {
    container: (state) => [
      {
        position: 'relative',
        display: 'inline-block',
        width: state.sizeRem,
        height: state.sizeRem,
        borderRadius: '100%',
      },
    ],
    svg: (state) => [
      {
        position: 'absolute',
        top: 0,
        width: state.sizeRem,
        height: state.sizeRem,
      },
    ],
    circle: (state) => [
      {
        fill: 'none',
        stroke: color.rgb().string(),
        transition: 'all 0.5s',
        strokeLinecap: shape,
        strokeWidth: state.strokeWidthRem,
        strokeDasharray: [state.dash, state.circumference - state.dash].join(','),
        transform: `rotate(-90deg) translate(-100%)`,
        opacity: value > 0 ? 1 : 0,
      },
    ],
    circleBackground: (state) => [
      {
        fill: 'none',
        stroke: strokeBackground.hex(),
        strokeWidth: state.strokeWidthRem,
      },
    ],
    text: (state) => [
      {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '> span': {
          fontSize,
          fontWeight,
          color: theme.color.onSurface.hex(),
        },
      },
    ],
  }
}

export default createClasses
