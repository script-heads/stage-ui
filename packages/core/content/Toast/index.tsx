import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Divider: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem(
    'Divider',
    props,
    createClasses,
  )

  return (
    <div {...events} {...attributes} ref={ref} css={[classes.container, styleProps.all]}>
      {!!props.leftChild && <div css={classes.leftChild}>{props.leftChild}</div>}
      <div css={classes.content}>{props.children || props.label}</div>
      {!!props.rightChild && <div css={classes.rightChild}>{props.rightChild}</div>}
    </div>
  )
}

export default forwardRef(Divider)
