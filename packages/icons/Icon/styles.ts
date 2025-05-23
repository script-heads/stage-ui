import colorProp from '@stage-ui/system/props/color'

import Types from './types'

const createClsses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => {
  const background = colorProp(props.background, theme)
  const color = colorProp(props.color, theme)
  const hoverColor = colorProp(props.hoverColor, theme)

  return {
    container: (state) => [
      {
        width: 'min-content',
        display: 'inline-flex',
        color: color?.rgb().string(),
        background: background ? background.rgb().string() : 'transparent',
        height: theme.assets.typography.text.m.fontSize,
        fontSize: theme.assets.typography.text.m.fontSize,
      },
      props.size &&
        !['xs', 's', 'm', 'l', 'xl'].includes(props.size) && {
          height: props.size,
          fontSize: props.size,
        },
      hoverColor && {
        transition: 'color .15s',
        ':hover': {
          color: hoverColor.rgb().string(),
        },
      },
      state.size === 'xs' && {
        height: theme.assets.typography.text.xs.fontSize,
        fontSize: theme.assets.typography.text.xs.fontSize,
      },
      state.size === 's' && {
        height: theme.assets.typography.text.s.fontSize,
        fontSize: theme.assets.typography.text.s.fontSize,
      },
      state.size === 'l' && {
        height: theme.assets.typography.text.l.fontSize,
        fontSize: theme.assets.typography.text.l.fontSize,
      },
      state.size === 'xl' && {
        height: theme.assets.typography.text.xl.fontSize,
        fontSize: theme.assets.typography.text.xl.fontSize,
      },
      state.shape === 'circle' && {
        borderRadius: '50%',
        border: `1px solid ${color?.rgb().string() || 'inherit'}`,
        padding: '0.4em',
      },
      state.shape === 'oval' && {
        borderRadius: '50%',
        padding: '0.4em',
      },
      styleProps.all,
    ],
    icon: [
      {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      props.rotate !== undefined && {
        transform: `rotate(${props.rotate}deg)`,
      },
    ],
  }
}

export default createClsses
