import colorResolver from '@stage-ui/system/props/color'
import { breakpoint } from '@stage-ui/system/utils/breakpoint'
import { toPixel, toRem } from '@stage-ui/system/utils/size'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const background = colorResolver(props.backgroundColor || theme.color.surface, theme)
    .rgb()
    .string()
  const arrowSize = toRem(props.arrowSize || '.75rem')
  const halfArrowSize = toRem(toPixel(arrowSize) / 2)
  const arrowOffset = toRem(props.arrowOffset || '0')
  let shadow = theme.assets.shadow.m
  if (props.shadow) {
    if (Array.isArray(props.shadow)) {
      const shadowSize = breakpoint(props.shadow, theme)
      shadow = theme.assets.shadow[shadowSize]
    } else {
      shadow = theme.assets.shadow[props.shadow]
    }
  }

  if (/#/.exec(shadow)) {
    // eslint-disable-next-line no-console
    console.warn('Shadow assets must be rgba or hsl or rgb')
  }

  return {
    container: [
      {
        position: 'relative',
        width: 'fit-content',
        background,
        borderRadius: theme.radius.m,
        filter: shadow
          .split('),')
          .map((s) => `drop-shadow(${s})`)
          .join(') '),
        padding: theme.spacing.s,
      },
      props.shadow && {
        boxShadow: 'none !important',
      },
    ],
    arrow: (state) => [
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
      state.align === 'top' && [
        {
          display: 'block',
          top: `-${halfArrowSize}`,
          left: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
          clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
          transform: `rotate(135deg)`,
        },
      ],
      state.align === 'bottom' && [
        {
          display: 'block',
          bottom: `-${halfArrowSize}`,
          left: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
          clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
          transform: `rotate(-45deg)`,
        },
      ],
      state.align === 'right' && [
        {
          display: 'block',
          right: `-${halfArrowSize}`,
          top: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
          clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
          transform: `rotate(-135deg)`,
        },
      ],
      state.align === 'left' && [
        {
          display: 'block',
          left: `-${halfArrowSize}`,
          top: `calc(50% - ${halfArrowSize} + ${arrowOffset})`,
          clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
          transform: `rotate(45deg)`,
        },
      ],
    ],
  }
}

export default createClasses
