import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Badge: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem(
    'Badge',
    props,
    createClasses,
  )
  return (
    <div css={[classes.container, styleProps.container]}>
      <div
        {...attributes}
        {...events}
        ref={ref}
        css={[
          classes.holder({
            align: props.align,
            shape: props.shape,
          }),
          styleProps.content,
        ]}
      >
        {props.content}
      </div>
      {props.children}
    </div>
  )
}

export default forwardRef(Badge)
