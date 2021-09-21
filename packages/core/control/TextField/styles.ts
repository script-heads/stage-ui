import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  { lineHeight, size = 'm' },
) => {
  return {
    input: (state) => [
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
          userSelect: 'none',
          color: theme.color.light.rgb().string(),
        },
      },
      state.multiline && {
        padding: theme.assets.field[size].indent,
      },
      state.disabled && {
        color: theme.color.hardest.rgb().string(),
      },
    ],
    lineNumbers: [
      {
        position: 'absolute',
        margin: theme.assets.field[size].indent,
        '> div': {
          height: lineHeight || theme.assets.typography.text[size].lineHeight,
        },
      },
    ],
  }
}

export default styles
