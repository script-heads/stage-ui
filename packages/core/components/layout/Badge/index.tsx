import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import createClasses from './styles'
import Types from './types'

const Badge: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events } = useSystem('Badge', props, createClasses)

  return (
    <div css={classes.container}>
      <div
        {...attributes}
        {...events}
        ref={ref}
        css={classes.holder({
          align: props.align,
          shape: props.shape,
        })}
      />
      {props.children}
    </div>
  )
}

export default forwardRef(Badge)
