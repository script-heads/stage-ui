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
  } = props

  const { classes, attributes, events, styleProps } = useSystem('Meter', props, styles)

  let childs = props.children as React.ReactElement[]
  if (childs && !Array.isArray(childs)) {
    childs = [childs]
  }

  return (
    <div
      ref={ref}
      {...attributes}
      {...events}
      css={[classes.container({ decoration, shape, size }), styleProps.all]}
    >
      <div css={classes.thumbWrapper}>
        {childs ? (
          childs.map((child, index) =>
            React.cloneElement(child, {
              key: index,
              ...props,
              ...child.props,
            }),
          )
        ) : (
          <Thumb
            shape={shape}
            size={size}
            value={value}
            color={color}
            loading={loading}
          />
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
