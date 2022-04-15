/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/no-array-index-key */
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem } from '@stage-ui/system'

import Thumb from './MeterThumb'
import styles from './styles'
import Types from './types'

const Meter: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const {
    decoration = 'filled',
    shape = 'round',
    size = 'm',
    value = 0,
    color,
    loading,
    children,
  } = props

  const { classes, attributes, events, styleProps } = useSystem('Meter', props, styles)

  const thumbs =
    children && !Array.isArray(children)
      ? [children]
      : (children as React.ReactElement<Types.Props>[]) || [
          <Thumb
            shape={shape}
            size={size}
            value={value}
            color={color}
            loading={loading}
          />,
        ]

  return (
    <div
      ref={ref}
      {...attributes}
      {...events}
      css={[classes.container({ decoration, shape, size }), styleProps.all]}
    >
      <div css={classes.thumbWrapper}>
        {thumbs.map((child, index) =>
          React.cloneElement(child, {
            key: index,
            ...props,
            ...child.props,
          }),
        )}
      </div>
    </div>
  )
}

const Default = forwardRef(Meter)

export default {
  ...Default,
  Thumb,
} as typeof Default & {
  Thumb: typeof Thumb
}
