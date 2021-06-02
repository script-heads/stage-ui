import colorResolver from '@stage-ui/system/props/color'
import { CreateClasses } from '@stage-ui/system/hooks/useSystem'
import sizeProp from '@stage-ui/system/props/size'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const { gap, dash, vertical } = props
  const color = colorResolver(props.color || theme.assets.border.color, theme)?.hex()

  const resolvedGap = sizeProp(theme.spacing, (v) => v, gap || dash)
  const resolvedDash = sizeProp(theme.spacing, (v) => v, dash)

  return {
    container: [
      vertical
        ? [
            {
              height: 'auto',
              width: '1px',
            },
            resolvedGap && resolvedDash
              ? {
                  backgroundImage: `linear-gradient(
                            to bottom,
                            ${color},
                            ${color} ${resolvedDash},
                            transparent ${resolvedDash}, 
                            transparent ${resolvedGap} 
                        )`,
                  backgroundPosition: 'right top',
                  backgroundSize: `calc(${resolvedGap} + ${resolvedDash}) calc(${resolvedGap} + ${resolvedDash})`,
                  backgroundRepeat: 'repeat-y',
                }
              : {
                  background: color,
                },
          ]
        : [
            {
              width: '100%',
              height: '1px',
            },
            resolvedGap && resolvedDash
              ? {
                  backgroundImage: `linear-gradient(
                            to right,
                            ${color},
                            ${color} ${resolvedDash},
                            transparent ${resolvedDash}, 
                            transparent ${resolvedGap} 
                        )`,
                  backgroundPosition: 'left bottom',
                  backgroundSize: `calc(${resolvedGap} + ${resolvedDash}) calc(${resolvedGap} + ${resolvedDash})`,
                  backgroundRepeat: 'repeat-x',
                }
              : {
                  background: color,
                },
          ],
      styleProps.all,
    ],
  }
}

export default createClasses
