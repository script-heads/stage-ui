import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  { lineHeight, size = 'm' },
) => {
  const minHeight = theme.assets.field[size]?.minHeight || '2.5rem'

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
        margin: `calc(${minHeight} / 4.5) 0`,
        minHeight: `calc(${minHeight} * 2)`,
      },
      state.disabled && {
        color: theme.color.hardest.rgb().string(),
      },
    ],
    lineNumbers: [
      {
        position: 'absolute',
        margin: `calc(${minHeight} / 4.5) 0`,
        '> div': {
          height: lineHeight || theme.assets.typography.text[size].lineHeight,
        },
      },
    ],
  }
}

export default styles
