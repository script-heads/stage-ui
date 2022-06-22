import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem, toPixel, toRem } from '@stage-ui/system'

import { useTheme } from '@emotion/react'

import styles from './styles'
import Types from './types'

const ArcProgress: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props,
  ref,
) => {
  const { shape = 'round', size = 'm', value = 0, strokeWidth, children } = props

  const { classes, attributes, events, styleProps } = useSystem(
    'ArcProgress',
    props,
    styles,
  )

  const theme = useTheme()

  const sizePx = toPixel(
    theme.assets.field[size as Stage.Sizes]?.height ||
      size ||
      theme.assets.field.m.height,
  )
  const sizeRem = toRem(sizePx)
  const sizeHalfRem = toRem(sizePx / 2)
  const strokeWidthPx = strokeWidth ? toPixel(strokeWidth) : sizePx / 8
  const strokeWidthRem = toRem(strokeWidthPx)

  const radius = (sizePx - strokeWidthPx) / 2
  const circumference = radius * Math.PI * 2
  const dash = (value / 222) * circumference
  const backgroundDash = (100 / 222) * circumference

  const styleState = {
    shape,
    size,
    sizePx,
    sizeRem,
    sizeHalfRem,
    strokeWidthPx,
    strokeWidthRem,
    radius,
    circumference,
    dash,
    backgroundDash,
  }

  return (
    <div
      ref={ref}
      {...attributes}
      {...events}
      css={[classes.container(styleState), styleProps.all]}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <svg css={[classes.svg(styleState)]}>
          <circle
            cx={sizeHalfRem}
            cy={sizeHalfRem}
            r={radius}
            css={classes.arcBackground(styleState)}
          />
          <circle
            cx={sizeHalfRem}
            cy={sizeHalfRem}
            r={radius}
            css={classes.arc(styleState)}
          />
        </svg>
        {children}
      </div>
    </div>
  )
}

export default forwardRef(ArcProgress)
