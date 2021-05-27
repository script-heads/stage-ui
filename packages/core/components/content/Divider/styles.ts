import colorResolver from '@stage-ui/system/props/color'
import { CreateClasses } from '@stage-ui/system/hooks/useSystem'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  let { gap = '0px', dash = '1px', vertical } = props
  const color = colorResolver(theme, props.color || theme.assets.border.color)?.hex()

  if (dash && !gap) {
    gap = dash
  }

  gap = theme.spacing[gap] || gap
  dash = theme.spacing[dash] || dash

  if (typeof gap === 'number') {
    gap = `${gap}px`
  }

  if (typeof dash === 'number') {
    dash = `${dash}px`
  }

  return {
    container: [
      vertical
        ? {
            height: 'auto',
            width: '1px',
            ...(gap || dash
              ? {
                  backgroundImage: `linear-gradient(
                            to bottom,
                            ${color},
                            ${color} ${dash},
                            transparent ${dash}, 
                            transparent ${gap} 
                        )`,
                  backgroundPosition: 'right top',
                  backgroundSize: `calc(${gap} + ${dash}) calc(${gap} + ${dash})`,
                  backgroundRepeat: 'repeat-y',
                }
              : {
                  background: color,
                }),
          }
        : {
            width: '100%',
            height: '1px',
            ...(gap || dash
              ? {
                  backgroundImage: `linear-gradient(
                            to right,
                            ${color},
                            ${color} ${dash},
                            transparent ${dash}, 
                            transparent ${gap} 
                        )`,
                  backgroundPosition: 'left bottom',
                  backgroundSize: `calc(${gap} + ${dash}) calc(${gap} + ${dash})`,
                  backgroundRepeat: 'repeat-x',
                }
              : {
                  background: color,
                }),
          },
      styleProps.all,
    ],
  }
}

export default createClasses
