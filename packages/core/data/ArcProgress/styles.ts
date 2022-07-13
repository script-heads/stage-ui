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
    '0.75rem') as string

  const fontWeight = (theme.assets.typography.text[size as Stage.Sizes]?.fontWeight ||
    theme.assets.typography.text.m.fontWeight ||
    600) as string

  return {
    container: (state) => [
      {
        position: 'relative',
        display: 'inline-block',
        width: state.sizeRem,
        height: state.sizeHalfRem,
        borderRadius: state.sizeRem,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
    ],
    svg: (state) => [
      {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '200%',
      },
    ],
    arc: (state) => [
      {
        fill: 'none',
        stroke: color.rgb().string(),
        transition: 'all 0.5s',
        strokeLinecap: shape,
        strokeWidth: state.strokeWidthRem,
        strokeDasharray: [state.dash, state.circumference - state.dash].join(','),
        transform: `rotate(-171.5deg) translateX(-107%) translateY(-92%)`,
        opacity: value > 0 ? 1 : 0,
      },
    ],
    arcBackground: (state) => [
      {
        fill: 'none',
        stroke: strokeBackground.hex(),
        strokeWidth: state.strokeWidthRem,
        strokeLinecap: shape,
        strokeDasharray: [
          state.backgroundDash,
          state.circumference - state.backgroundDash,
        ].join(','),
        transform: `rotate(-171.5deg) translateX(-107%) translateY(-92%)`,
      },
    ],
  }
}

export default createClasses