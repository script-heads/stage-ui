import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { assets } = theme
  const { text } = assets.typography
  const typography = text[props.size || 'm'] || text.m
  const padding = typography.fontSize

  return {
    container: [
      {
        position: 'relative',
        width: 'fit-content',
      },
    ],
    holder: (state) => [
      {
        zIndex: 1,
        display: 'flex',
        width: 'fit-content',
        color: theme.color.white.rgb().string(),
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        padding: `calc(${padding} / 4) calc(${padding} / 2)`,
        top: 0,
        right: 0,
        transform: 'translate(50%, -50%)',
        background: theme.color.primary.rgb().string(),
        borderRadius: '100rem',
        ...typography,
      },
      state.shape === 'rounded' && {
        borderRadius: theme.radius.s,
      },
      state.shape === 'square' && {
        borderRadius: '0',
      },
      state.align === 'top-right' && [
        {
          top: 0,
          right: 0,
          transform: 'translate(50%, -50%)',
        },
      ],
      state.align === 'top-left' && [
        {
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
        },
      ],
      state.align === 'bottom-right' && [
        {
          bottom: 0,
          right: 0,
          top: 'unset',
          transform: 'translate(50%, 50%)',
        },
      ],
      state.align === 'bottom-left' && [
        {
          bottom: 0,
          left: 0,
          top: 'unset',
          transform: 'translate(-50%, 50%)',
        },
      ],
      state.align === 'top' && [
        {
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      ],
      state.align === 'bottom' && [
        {
          bottom: 0,
          left: '50%',
          top: 'unset',
          transform: 'translate(-50%, 50%)',
        },
      ],
      state.align === 'right' && [
        {
          top: '50%',
          right: 0,
          transform: 'translate(50%, -50%)',
        },
      ],
      state.align === 'left' && [
        {
          top: '50%',
          left: 0,
          transform: 'translate(-50%, -50%)',
        },
      ],
    ],
  }
}

export default createClasses
