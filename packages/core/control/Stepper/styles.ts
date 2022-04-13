import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => ({
  container: [
    {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      transition: 'all 0.25s',
    },
  ],
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepText: (state) => [
    {
      color: theme.color.light.string(),
      marginTop: theme.spacing.s,
      fontWeight: 500,
      ...theme.assets.typography.text[props.size || 'm'],
    },
    state.active && [
      {
        color: theme.color.primary.string(),
      },
    ],
    state.complete && [
      {
        color: theme.color.primary.string(),
      },
    ],
  ],
  step: (state) => [
    {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid',
      color: theme.color.light.string(),
      borderColor: theme.color.lightest.string(),
      backgroundColor: theme.color.surface.string(),
      borderRadius: '100rem',
      userSelect: 'none',
      ...theme.assets.typography.text[props.size || 'm'],
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
      backgroundColor: theme.color.lightest.string(),
    },
    state.active && [
      {
        color: theme.color.primary.string(),
        borderColor: theme.color.primary.alpha(0.5).string(),
      },
      state.size === 'xs' && {
        backgroundColor: theme.color.light.string(),
      },
    ],
    state.complete && {
      color: theme.color.onPrimary.string(),
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
      background: `linear-gradient(to left, ${theme.color.lightest.hex()} 50%, ${theme.color.primary.hex()} 50%)`,
      backgroundPosition: 'right',
      backgroundSize: '200%',
      transition: 'background 0.25s ease-in-out',
      marginTop: '1.25rem',
      marginLeft: theme.spacing[props.size || 'm'],
      marginRight: theme.spacing[props.size || 'm'],
    },
    state.complete && {
      backgroundPosition: 'left',
    },
    state.size === 'xl' && {
      height: '0.375rem',
      marginTop: '1.75rem',
    },
    state.size === 'l' && {
      height: '0.25rem',
      marginTop: '1.5rem',
    },
    state.size === 's' && {
      marginTop: '1rem',
    },
    state.size === 'xs' && {
      background: 'none',
      flexBasis: '0.375rem',
      flexGrow: 0,
      marginTop: 0,
    },
  ],
})

export default styles
