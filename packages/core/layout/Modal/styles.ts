import SharedZIndex from '../../utils/SharedZIndex'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size = 'm' } = props

  const isDark = theme.color.surface.isDark()
  const spacing = theme.spacing[size] || theme.spacing.m
  const titleSize =
    theme.assets.typography.header[size] || theme.assets.typography.header.m
  const subtitleSize =
    theme.assets.typography.text[size] || theme.assets.typography.text.m

  return {
    overlay: (state) => [
      {
        opacity: 0,
        zIndex: SharedZIndex.increment,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.color.surface.alpha(0.75).rgb().string(),
        overflowY: 'auto',
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.25s',
        backfaceVisibility: 'hidden',
      },
      state.visible && {
        opacity: 1,
      },
    ],
    wrapper: (state) => [
      state.decoration === 'modal' && {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      state.decoration === 'panel' && {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
      },
      state.decoration === 'fullscreen' && {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      state.decoration === 'leftPanel' && {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      state.decoration === 'rightPanel' && {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    ],
    window: (state) => [
      {
        position: 'relative',
        opacity: 0,
        margin: '0 auto',
        padding: spacing,
        minHeight: '1rem',
        backgroundColor: theme.color.background.rgb().string(),
        borderRadius: theme.radius.m,
        boxSizing: 'border-box',
        overflow: 'hidden',
        transition: 'all 0.25s',
      },
      state.decoration === 'modal' && {
        transform: 'translateY(-2rem)',
        minWidth: '15rem',
        maxWidth: '80vw',
        marginTop: spacing,
        marginBottom: spacing,
        boxShadow: theme.assets.shadow.xl,
      },
      state.decoration === 'panel' && {
        minWidth: '15rem',
        maxWidth: '80vw',
        marginTop: '20vh',
        transform: 'translateY(15rem)',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: theme.assets.shadow.xl,
      },
      state.decoration === 'fullscreen' && {
        width: '100%',
        minWidth: '100%',
        height: '100vh',
        minHeight: '100vh',
      },
      state.decoration === 'leftPanel' && {
        margin: 0,
        height: '100vh',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: 'translateX(-30rem)',
      },
      state.decoration === 'rightPanel' && {
        margin: 0,
        height: '100vh',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: 'translateX(30rem)',
      },
      state.visible && [
        {
          opacity: 1,
          transform: 'translateY(0) translateX(0)',
        },
      ],
    ],

    header: () => [
      {
        h1: [
          titleSize,
          {
            color: isDark ? theme.color.gray[200].hex() : theme.color.gray[700].hex(),
          },
        ],
        p: [
          subtitleSize,
          {
            marginBottom: spacing,
            color: isDark ? theme.color.gray[400].hex() : theme.color.gray[500].hex(),
          },
        ],
      },
    ],

    cross: () => [
      titleSize,
      {
        cursor: 'pointer',
        transition: 'all 0.25s',
        transform: 'scale(1)',
        opacity: 0.7,
        ':hover': {
          transform: 'scale(1.1)',
        },
        ':active': {
          transform: 'scale(1)',
        },
      },
    ],
  }
}

export default createClasses
