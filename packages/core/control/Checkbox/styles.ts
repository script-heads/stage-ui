import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { disabled, size = 'm' } = props
  return {
    check: ({ checked }) => [
      {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.color.primary.rgb().string(),
        backgroundColor: theme.color.surface.rgb().string(),
        borderColor: theme.color.border.rgb().string(),
        boxShadow: theme.assets.innerShadow.m,
        borderWidth: theme.assets.border.width,
        borderStyle: theme.assets.border.style,
        borderRadius: theme.radius.s,
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
          color: theme.color.gray[700].rgb().string(),
          borderColor: theme.color.gray[200].rgb().string(),
          backgroundColor: theme.color.gray[200].rgb().string(),
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
      },
      size === 'xl' && {
        width: '2rem',
        height: '2rem',
      },
    ],
    icon: ({ checked }) => [
      {
        height: 'auto',
        transition: 'opacity .15s, transform .15s',
        willChange: 'opacity, transform',
        stroke: theme.color.white.rgb().string(),
        strokeWidth: '2px',
        strokeLinejoin: 'round',
        opacity: 0,
        transform: `scale(0.5)`,
      },
      size === 'xs' && {
        fontSize: '0.5rem',
      },
      size === 's' && {
        fontSize: '0.75rem',
      },
      size === 'm' && {
        fontSize: '1rem',
      },
      size === 'l' && {
        fontSize: '1.45rem',
      },
      size === 'xl' && {
        fontSize: '1.9rem',
      },
      checked && {
        opacity: 1,
        transform: `scale(1)`,
      },
    ],
  }
}

export default createClasses
