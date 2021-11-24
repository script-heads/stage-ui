import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { loading } = props

  const color = colorResolver(props.color || theme.color.primary, theme)

  return {
    container: (state) => [
      {
        position: 'absolute',
        top: 0,
        background: color.rgb().string(),
        animation: loading ? 'move 2s linear infinite' : 'none',
        overflow: 'hidden',
        borderRadius: '4rem',
        transition: 'width 0.25s',
        boxSizing: 'border-box',
        height: '0.75rem',
        zIndex: 1,
        '&:last-child': {
          position: 'relative',
        },
        '&:after': loading && [
          {
            content: `''`,
            position: 'absolute',
            top: '0; left: 0; bottom: 0; right: 0',
            backgroundImage: `linear-gradient(
                            -45deg, 
                            ${theme.color.surface.alpha(0.2).string()} 25%, 
                            transparent 25%, 
                            transparent 50%, 
                            ${theme.color.surface.alpha(0.2).string()} 50%, 
                            ${theme.color.surface.alpha(0.2).string()} 75%, 
                            transparent 75%, 
                            transparent
                        )`,
            backgroundSize: '2rem 2rem',
            zIndex: 1,
            animation: 'move 2s linear infinite',
            overflow: 'hidden',
          },
          state.size === 'xs' && [
            {
              backgroundSize: '0.5rem 0.5rem',
            },
          ],
          state.size === 's' && [
            {
              backgroundSize: '1rem 1rem',
            },
          ],
          state.size === 'l' && [
            {
              backgroundSize: '3rem 3rem',
            },
          ],
          state.size === 'xl' && [
            {
              backgroundSize: '4rem 4rem',
            },
          ],
        ],
        '@keyframes move': {
          '0%': {
            backgroundposition: '0 0',
          },
          '100%': {
            backgroundPosition: '2rem 2rem',
          },
        },
      },
      state.size === 'xl' && { height: '1.25rem' },
      state.size === 'l' && { height: '1rem' },
      state.size === 's' && { height: '0.5rem' },
      state.size === 'xs' && { height: '0.375rem' },
      state.shape === 'square' && [
        {
          borderRadius: 0,
        },
      ],
    ],
  }
}

export default createClasses
