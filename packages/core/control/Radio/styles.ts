import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size = 'm', disabled = false } = props
  return {
    check: (variant, state) => [
      {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.color.surface.rgb().string(),
        backgroundColor: theme.color.surface.rgb().string(),
        borderColor: theme.color.light.rgb().string(),
        borderWidth: theme.assets.border.width,
        borderStyle: theme.assets.border.style,
        boxShadow: theme.assets.innerShadow.m,
        borderRadius: '50%',
        transition: 'color .15s, border-color .15s, background-color .15s',
        willChange: 'color, border-color, background-color',
        outline: 'none',
      },
      state.checked && {
        backgroundColor: theme.color.primary.rgb().string(),
        borderColor: 'transparent',
      },
      disabled && [
        {
          backgroundColor: theme.color.lightest.rgb().string(),
          borderColor: theme.color.light.rgb().string(),
        },
        state.checked && {
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
    radio: (variant, state) => [
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
      state.checked && {
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
