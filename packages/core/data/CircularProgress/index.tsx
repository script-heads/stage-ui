import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem, toPixel, toRem } from '@stage-ui/system'

import { useTheme } from '@emotion/react'

import styles from './styles'
import Types from './types'

const CircularProgress: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props,
  ref,
) => {
  const {
    decoration = 'filled',
    shape = 'round',
    size = 'm',
    value = 0,
    strokeWidth,
    text,
    showValue,
    children,
  } = props

  const { classes, attributes, events, styleProps } = useSystem(
    'CircularProgress',
    props,
    styles,
  )

  // const circleColor = theme.color.gray[200].hex()
  // const textColor = theme.color.gray[900].hex(),
  // const color = theme.color.gray[400].hex(),
  // const showPercentage,
  // const centerText,
  // const percentage,

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
  const dash = (value / 100) * circumference

  const styleState = {
    shape,
    size,
    decoration,
    sizePx,
    sizeRem,
    strokeWidthPx,
    strokeWidthRem,
    radius,
    circumference,
    dash,
  }

  const textValue = children || text || (showValue ? value : undefined)

  return (
    <div
      ref={ref}
      {...attributes}
      {...events}
      css={[classes.container(styleState), styleProps.all]}
    >
      <svg css={[classes.svg(styleState)]}>
        <circle
          cx={sizeHalfRem}
          cy={sizeHalfRem}
          r={radius}
          css={classes.circleBackground(styleState)}
        />
        <circle
          cx={sizeHalfRem}
          cy={sizeHalfRem}
          r={radius}
          css={classes.circle(styleState)}
        />
      </svg>
      {typeof textValue !== 'undefined' && (
        <div css={classes.text(styleState)}>
          <span>{textValue}</span>
        </div>
      )}
    </div>
  )
}

export default forwardRef(CircularProgress)
