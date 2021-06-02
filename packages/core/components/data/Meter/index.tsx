import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Thumb from './MeterThumb'
import styles from './styles'
import Types from './types'

const Meter: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { decoration = 'filled', shape = 'round', size = 'm', value = 0 } = props

  const { classes, attributes, events } = useSystem('Meter', props, styles)

  let childs = props.children as React.ReactElement[]
  if (childs && !Array.isArray(childs)) {
    childs = [childs]
  }

  return (
    <div ref={ref} {...attributes} {...events} css={classes.container({ decoration, shape, size })}>
      {childs ? (
        childs.map((child, index) =>
          React.cloneElement(child, {
            key: index,
            ...props,
            ...child.props,
          }),
        )
      ) : (
        <Thumb {...props} value={value} />
      )}
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
