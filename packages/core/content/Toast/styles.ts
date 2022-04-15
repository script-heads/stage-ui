import { colorProp } from '@stage-ui/system'

import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const backgroundColor = colorProp(props.color || theme.color.primary, theme)
    ?.rgb()
    .string()

  return {
    container: [
      {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: theme.color.onPrimary.rgb().string(),
        backgroundColor,
        borderRadius: theme.radius.m,
      },
      theme.assets.typography.text.m,
    ],
    content: [
      {
        flex: 1,
        padding: theme.spacing.m,
      },
    ],
    leftChild: [
      {
        paddingLeft: theme.spacing.m,
        marginRight: `-${theme.spacing.s}`,
        ' svg': {
          fontSize: '1.5rem',
          marginTop: '0.25rem',
        },
      },
    ],
    rightChild: [
      {
        paddingRight: theme.spacing.m,
        marginLeft: `-${theme.spacing.s}`,
        ' svg': {
          fontSize: '1.5rem',
          marginTop: '0.25rem',
        },
      },
    ],
  }
}

export default styles
