import colorResolver from '@stage-ui/system/props/color'
import { toPixel, toRem } from '@stage-ui/system/utils/size'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
  styleProps,
) => {
  const background = colorResolver(props.backgroundColor || theme.color.surface, theme)
    .rgb()
    .string()
  const borderColor = colorResolver(props.borderColor || theme.assets.border.color, theme)
    .rgb()
    .string()
  const borderWidth = theme.assets.border.width
  const borderStyle = theme.assets.border.style
  const arrowSize = toRem(props.arrowSize || '.75rem')
  const halfArrowSize = toRem(toPixel(arrowSize) / 2)
  const arrowOffset = toRem(props.arrowOffset || '0')

  return {
    container: [
      {
        position: 'relative',
        width: 'fit-content',
        background,
        borderWidth,
        borderStyle,
        borderColor,
        borderRadius: theme.radius.m,
        filter: `drop-shadow(${theme.assets.shadow.m})`,
        padding: theme.spacing.s,
      },
      styleProps.all,
    ],
    arrow: (variant) => [
      {
        display: 'none',
        height: arrowSize,
        width: arrowSize,
        position: 'absolute',
        boxSizing: 'border-box',
        backgroundColor: 'inherit',
        border: 'inherit',
        borderRadius: `0 0 0 calc(${arrowSize} / 4)`,
      },
      variant({
        align: {
          top: [
            {
              display: 'block',
              top: `-${halfArrowSize}`,
              left: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
              clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
              transform: `rotate(135deg)`,
            },
          ],
          bottom: [
            {
              display: 'block',
              bottom: `-${halfArrowSize}`,
              left: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
              clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
              transform: `rotate(-45deg)`,
            },
          ],
          right: [
            {
              display: 'block',
              right: `-${halfArrowSize}`,
              top: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
              clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
              transform: `rotate(-135deg)`,
            },
          ],
          left: [
            {
              display: 'block',
              left: `-${halfArrowSize}`,
              top: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
              clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
              transform: `rotate(45deg)`,
            },
          ],
        },
      }),
    ],
  }
}

export default createClasses
