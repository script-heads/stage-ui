import Types from './types'
import SharedZIndex from '../../utils/SharedZIndex'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { decoration = 'modal', size = 'm' } = props

  const isPanel = decoration === 'panel'

  const spacing = theme.spacing[size] || theme.spacing.m
  const titleSize = theme.assets.typography.header[size] || theme.assets.typography.header.m
  const subtitleSize = theme.assets.typography.text[size] || theme.assets.typography.text.m

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
        backgroundColor: 'rgba(0,0,0,.5)',
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
    ],
    window: (state) => [
      {
        position: 'relative',
        opacity: 0,
        margin: '0 auto',
        padding: spacing,
        minHeight: '1rem',
        backgroundColor: theme.color.surface.rgb().string(),
        // borderWidth: theme.assets.border.width,
        // borderStyle: theme.assets.border.style,
        // borderColor: theme.assets.border.color,
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
      state.visible && [
        {
          opacity: 1,
          transform: 'translateY(0)',
        },
      ],
    ],

    header: () => [
      {
        h3: titleSize,
        p: [
          subtitleSize,
          {
            marginBottom: spacing,
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
