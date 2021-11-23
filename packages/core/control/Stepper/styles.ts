import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => ({
  container: [
    {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      transition: 'all 0.25s',
      ...theme.assets.typography.text[props.size || 'm'],
    },
  ],
  step: (state) => [
    {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid',
      color: theme.color.gray[500].string(),
      borderColor: theme.color.gray[200].string(),
      backgroundColor: theme.color.surface.string(),
      borderRadius: '100rem',
      userSelect: 'none',
    },
    state.size === 'xl' && {
      width: '3.5rem',
      height: '3.5rem',
      borderWidth: '3px',
    },
    state.size === 'l' && {
      width: '3rem',
      height: '3rem',
      borderWidth: '2px',
    },
    state.size === 'm' && {
      width: '2.5rem',
      height: '2.5rem',
    },
    state.size === 's' && {
      width: '2rem',
      height: '2rem',
    },
    state.size === 'xs' && {
      width: '4.5rem',
      height: '0.25rem',
      border: 'none',
      backgroundColor: theme.color.gray['200'].string(),
    },
    state.active && [
      {
        color: theme.color.primary.string(),
        borderColor: theme.color.primary.alpha(0.5).string(),
      },
      state.size === 'xs' && {
        backgroundColor: theme.color.gray['500'].string(),
      },
    ],
    state.complete && {
      color: theme.color.white.string(),
      backgroundColor: theme.color.primary.string(),
      borderColor: theme.color.primary.string(),
    },
    state.pointer && {
      cursor: 'pointer',
    },
  ],
  separator: (state) => [
    {
      position: 'relative',
      flex: 1,
      height: '0.125rem',
      background: theme.color.gray[200].string(),
    },
    state.active && {
      background: theme.color.gray['500'].string(),
    },
    state.complete && {
      background: theme.color.primary.alpha(0.5).string(),
    },
    state.size === 'xl' && {
      height: '0.375rem',
    },
    state.size === 'l' && {
      height: '0.25rem',
    },
    state.size === 'xs' && {
      background: 'none',
      flexBasis: '0.375rem',
      flexGrow: 0,
    },
  ],
})

export default styles
