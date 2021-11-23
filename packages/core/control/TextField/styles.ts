import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  { lineHeight, size = 'm', leftChildNumber },
) => ({
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
        color: theme.color.gray[500].rgb().string(),
      },
    },
    state.multiline && {
      padding: theme.assets.field[size].indent,
      paddingLeft: leftChildNumber ? 0 : undefined,
    },
    state.disabled && {
      color: theme.color.gray[700].rgb().string(),
    },
  ],
  lineNumbers: [
    {
      backgroundColor: theme.color.gray[200].hex(),
      height: 'max-content',
      minHeight: '100%',
      position: 'absolute',
      padding: `${theme.assets.field[size].indent}`,
      textAlign: 'right',
      '> div': {
        height: lineHeight || theme.assets.typography.text[size].lineHeight,
      },
    },
  ],
})

export default styles
