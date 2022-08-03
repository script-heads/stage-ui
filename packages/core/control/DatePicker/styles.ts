import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => ({
  drop: () => [
    {
      backgroundColor: theme.color.surface.hex(),
      padding: theme.spacing.s,
      boxShadow: theme.assets.shadow.m,
      borderRadius: theme.radius.m,
    },
  ],
  input: [
    {
      outline: 0,
      padding: 0,
      margin: 0,
      border: 'none',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      resize: 'vertical',
      boxShadow: 'none',
      color: 'inherit',
      font: 'inherit',
      cursor: 'inherit',
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.color.light.rgb().string(),
      },
    },
  ],
})

export default createClasses
