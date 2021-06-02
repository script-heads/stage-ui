import Types from './types'

const styles: Stage.CreateAdditionalClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const minHeight = theme.assets.field[props.size || 'm']?.minHeight || theme.assets.field.m.minHeight || '2.5rem'

  return {
    container: (varinat) => [styleProps.margin, styleProps.flex, styleProps.grid, styleProps.layout],
    field: (variant) => [styleProps.color, styleProps.border, styleProps.padding],
    child: (variant) => [
      props.leftChildNumber &&
        variant({
          align: {
            left: {
              overflow: 'hidden',
              position: 'relative',
            },
          },
        }),
    ],
    input: (variant) => [
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
      variant({
        multiline: {
          margin: `calc(${minHeight} / 4.5) 0`,
          minHeight: `calc(${minHeight} * 2)`,
        },
        disabled: {
          color: theme.color.hardest.rgb().string(),
        },
      }),
    ],
    lineNumbers: [
      {
        position: 'absolute',
        margin: `calc(${minHeight} / 4.5) 0`,
        '> div': {
          height: props.lineHeight || theme.assets.typography.text[props.size || 'm'].lineHeight,
        },
      },
    ],
  }
}

export default styles as Stage.CreateClasses<Types.Styles, Types.Props>
