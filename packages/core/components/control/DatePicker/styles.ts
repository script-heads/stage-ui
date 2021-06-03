import fieldStyles from '@stage-ui/core/components/basic/Field/styles'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    drop: (variant) => [
      {
        transition: 'all 0.2s',
        transform: `translateY(-1rem) scale(0.9)`,
        opacity: 0,
        visibility: 'hidden',
      },
      variant({
        isActive: [
          {
            transform: `translateY(0) scale(1)`,
            opacity: 1,
            visibility: 'visible',
          },
        ],
      }),
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
  }
}

export default createClasses
