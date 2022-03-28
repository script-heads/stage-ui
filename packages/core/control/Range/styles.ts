import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => ({
  container: [
    {
      position: 'relative',
      minWidth: '4rem',
      height: 'calc(1rem + 4px)',
      cursor: 'pointer',
    },
  ],
  rail: [
    {
      position: 'absolute',
      top: 'calc(50% - 2px)',
      height: '4px',
      background: theme.color.lightest.rgb().string(),
      width: '100%',
      zIndex: 1,
      borderRadius: '2px',
    },
  ],
  track: [
    {
      position: 'absolute',
      top: 'calc(50% - 2px)',
      height: '4px',
      background: theme.color.primary.rgb().string(),
      zIndex: 2,
      borderRadius: '2px',
    },
  ],
  thumb: [
    {
      position: 'absolute',
      width: '1rem',
      height: '1rem',
      borderRadius: '1rem',
      marginLeft: 'calc(-.5rem - 2px)',
      background: theme.color.surface.rgb().string(),
      borderColor: theme.color.border.rgb().string(),
      borderStyle: 'solid',
      borderWidth: '1px',
      boxShadow: theme.assets.shadow.s,
      border: `2px solid ${theme.color.primary.rgb().string()}`,
      zIndex: 3,
      transition: 'transform 0.25s',
      ':hover': {
        transform: 'scale(1.05)',
      },
      ':active': {
        transform: 'scale(0.95)',
      },
    },
  ],
})

export default createClasses
