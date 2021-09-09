import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const labelColor = props.labelColor ? colorResolver(props.labelColor, theme) : undefined
  const { disabled, uppercase, size = 'm' } = props
  return {
    container: [
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.color.onSurface.rgb().string(),
        outline: 'none',
      },
      disabled && {
        cursor: 'not-allowed',
      },
    ],

    label: [
      {
        marginLeft: '0.5rem',
        userSelect: 'none',
        color: labelColor?.rgb().string(),
      },
      theme.assets.typography.text[size],
      disabled && {
        color: theme.color.light.rgb().string(),
      },
      uppercase && {
        textTransform: 'uppercase',
      },
    ],
  }
}

export default createClasses
