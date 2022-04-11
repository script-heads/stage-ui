import colorResolver from '@stage-ui/system/props/color'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { disabled, uppercase, size = 'm' } = props
  const labelColor = props.labelColor ? colorResolver(props.labelColor, theme) : undefined

  return {
    container: [
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.color.onSurface.rgb().string(),
        outline: 'none',
      },
      disabled && {
        cursor: 'not-allowed',
      },
    ],
    label: [
      {
        marginLeft: '0.5rem',
        userSelect: 'none',
        color: labelColor?.rgb().string(),
      },
      theme.assets.typography.text[size],
      disabled && {
        color: theme.color.light.rgb().string(),
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
        backgroundColor: theme.color.lightest.rgb().string(),
        transition: 'backgroundColor .15s',
        willChange: 'backgroundColor',
      },
      size === 'xs' && {
        width: '1.125rem',
        height: '0.25rem',
        borderRadius: '0.75rem',
      },
      size === 's' && {
        width: '1.5rem',
        height: '0.5rem',
        borderRadius: '1rem',
      },
      size === 'm' && {
        width: '1.825rem',
        height: '0.625rem',
        borderRadius: '1.25rem',
      },
      size === 'l' && {
        width: '2.25rem',
        height: '0.75rem',
        borderRadius: '1.5rem',
      },
      size === 'xl' && {
        width: '3rem',
        height: '1rem',
        borderRadius: '2rem',
      },
      checked && {
        backgroundColor: theme.color.primary.rgb().string(),
      },
      disabled && {
        backgroundColor: theme.color.lightest.rgb().string(),
      },
    ],
    icon: ({ checked }) => [
      {
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: theme.color.primary.rgb().string(),
        background: theme.color.surface.rgb().string(),
        boxShadow: theme.assets.shadow.m,
        transition: 'left .15s',
        willChange: 'opacity',
        outline: 'none',
      },
      size === 'xs' && [
        {
          borderWidth: '0.1rem',
          width: '0.75rem',
          height: '0.75rem',
          left: '-0.1875rem',
        },
        checked && {
          left: '0.1875rem',
        },
      ],
      size === 's' && [
        {
          borderWidth: '0.1rem',
          width: '1rem',
          height: '1rem',
          left: '-0.25rem',
        },
        checked && {
          left: '0.25rem',
        },
      ],
      size === 'm' && [
        {
          borderWidth: '0.125rem',
          width: '1.25rem',
          height: '1.25rem',
          left: '-0.3125rem',
        },
        checked && {
          left: '0.3125rem',
        },
      ],
      size === 'l' && [
        {
          borderWidth: '0.175rem',
          width: '1.5rem',
          height: '1.5rem',
          left: '-0.375rem',
        },
        checked && {
          left: '0.375rem',
        },
      ],
      size === 'xl' && [
        {
          borderWidth: '0.25rem',
          width: '2rem',
          height: '2rem',
          left: '-0.5rem',
        },
        checked && {
          left: '0.5rem',
        },
      ],
      disabled && {
        borderColor: theme.color.lightest.rgb().string(),
      },
    ],
  }
}

export default createClasses
