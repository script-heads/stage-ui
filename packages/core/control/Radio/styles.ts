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
        cursor: 'not-allowed !important',
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
        color: theme.color.surface.rgb().string(),
        backgroundColor: theme.color.surface.rgb().string(),
        borderColor: theme.color.light.rgb().string(),
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: theme.assets.innerShadow.m,
        borderRadius: '50%',
        transition: 'color .15s, border-color .15s, background-color .15s',
        willChange: 'color, border-color, background-color',
        outline: 'none',
      },
      checked && {
        backgroundColor: theme.color.primary.rgb().string(),
        borderColor: 'transparent',
      },
      disabled && [
        {
          backgroundColor: theme.color.lightest.rgb().string(),
          borderColor: theme.color.light.rgb().string(),
        },
        checked && {
          backgroundColor: theme.color.primary.alpha(0.5).rgb().string(),
          borderColor: 'transparent',
        },
      ],
      size === 'xs' && {
        width: '0.75rem',
        height: '0.75rem',
      },
      size === 's' && {
        width: '1rem',
        height: '1rem',
      },
      size === 'm' && {
        width: '1.25rem',
        height: '1.25rem',
      },
      size === 'l' && {
        width: '1.5rem',
        height: '1.5rem',
      },
      size === 'xl' && {
        width: '2rem',
        height: '2rem',
      },
    ],
    icon: ({ checked }) => [
      {
        transition: 'all 0.2s',
        transform: `scale(0)`,
        opacity: 0,
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: theme.color.onPrimary.rgb().string(),
      },
      checked && {
        transform: `scale(0.5)`,
        opacity: 1,
        transition: 'opacity .15s, transform .15s',
        willChange: 'opacity, transform',
      },
      size === 'xs' && { borderWidth: '0.1rem' },
      size === 's' && { borderWidth: '0.125rem' },
      size === 'm' && { borderWidth: '0.25rem' },
      size === 'l' && { borderWidth: '0.25rem' },
      size === 'xl' && { borderWidth: '0.375rem' },
    ],
  }
}

export default createClasses
