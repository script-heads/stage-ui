import { breakpointProp, toPixel, toRem } from '@stage-ui/system'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const arrowSize = toRem(props.arrowSize || '.75rem')
  const halfArrowSize = toRem(toPixel(arrowSize) / 2)
  const arrowOffset = toRem(props.arrowOffset || '0')

  return {
    container: [
      {
        position: 'relative',
        width: 'fit-content',
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
      },
      breakpointProp(props.shadow || 'm', theme, (currentValue) => {
        const shadow = theme.assets.shadow[currentValue]
        if (/#/.exec(shadow)) {
          console.warn('Shadow assets must be rgba or hsl or rgb')
        }
        return {
          filter: shadow
            .split('),')
            .map((s) => `drop-shadow(${s})`)
            .join(') '),
        }
      }),
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
