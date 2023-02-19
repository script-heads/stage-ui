import colorProp from '@stage-ui/system/props/color'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { disabled, uppercase, color = 'primary', shape = 'round', size = 'm' } = props
  const activeColor = colorProp(color, theme)
  const labelColor = props.labelColor ? colorProp(props.labelColor, theme) : undefined
  const isDark = theme.color.surface.isDark()
  const backgroundColor = isDark
    ? theme.color.surface.lighten(0.5).hex()
    : theme.color.surface.darken(0.1).hex()

  return {
    container: [
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.color.onSurface.string(),
        outline: 'none',
      },
      disabled && {
        cursor: 'not-allowed !important',
      },
    ],
    label: [
      {
        marginLeft: '0.5rem',
        userSelect: 'none',
        fontWeight: '500',
        color: labelColor?.string(),
      },
      theme.assets.typography.text[size],
      disabled && {
        color: theme.color.light.string(),
      },
      uppercase && {
        textTransform: 'uppercase',
      },
    ],
    check: ({ checked }) => [
      {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        transition: 'backgroundColor .15s',
        willChange: 'backgroundColor',
      },
      shape === 'round' && {
        borderRadius: '10rem',
      },
      shape === 'rounded' && {
        borderRadius: theme.radius[size],
      },
      size === 'xs' && {
        width: '1.5rem',
        height: '1rem',
      },
      size === 's' && {
        width: '2rem',
        height: '1.25rem',
      },
      size === 'm' && {
        width: '2.5rem',
        height: '1.5rem',
      },
      size === 'l' && {
        width: '3rem',
        height: '1.75rem',
      },
      size === 'xl' && {
        width: '3.75rem',
        height: '2.25rem',
      },
      checked && {
        backgroundColor: activeColor.string(),
      },
      disabled && {
        backgroundColor,
      },
    ],
    icon: ({ checked }) => [
      {
        position: 'relative',
        boxSizing: 'border-box',
        background: theme.color.white.string(),
        boxShadow: theme.assets.shadow.m,
        transition: 'left .15s',
        willChange: 'opacity',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.color.gray[900].string(),
        ' > span': {
          height: 'auto',
          '> svg': {
            height: `calc(${
              theme.assets.typography.text[size].lineHeight as string
            } / 1.5)`,
            width: `calc(${
              theme.assets.typography.text[size].lineHeight as string
            } / 1.5)`,
          },
        },
      },
      shape === 'round' && {
        borderRadius: '50%',
      },
      shape === 'rounded' && {
        borderRadius: theme.radius[size],
      },
      size === 'xs' && [
        {
          width: '0.75rem',
          height: '0.75rem',
          left: '-0.25rem',
        },
        checked && {
          left: '0.25rem',
        },
      ],
      size === 's' && [
        {
          width: '1rem',
          height: '1rem',
          left: '-0.375rem',
        },
        checked && {
          left: '0.375rem',
        },
      ],
      size === 'm' && [
        {
          width: '1.25rem',
          height: '1.25rem',
          left: '-0.5rem',
        },
        checked && {
          left: '0.5rem',
        },
      ],
      size === 'l' && [
        {
          width: '1.5rem',
          height: '1.5rem',
          left: '-0.625rem',
        },
        checked && {
          left: '0.625rem',
        },
      ],
      size === 'xl' && [
        {
          width: '2rem',
          height: '2rem',
          left: '-0.75rem',
        },
        checked && {
          left: '0.75rem',
        },
      ],
      disabled && {
        borderColor: theme.color.lightest.string(),
      },
    ],
  }
}

export default createClasses
