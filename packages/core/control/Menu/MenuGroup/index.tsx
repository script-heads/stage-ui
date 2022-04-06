import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const MenuGroup: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { rightChild, leftChild } = props

  const { classes, attributes, events, styleProps } = useSystem(
    'MenuGroup',
    props,
    createClasses,
  )

  return (
    <div
      {...attributes}
      {...events}
      data-flow="menu-group"
      css={[classes.container, styleProps.all]}
    >
      <div data-flow="menu-group-title">
        {leftChild && <span data-flow="left">{leftChild}</span>}
        <span data-flow="middle">{props.title}</span>
        {rightChild && <span data-flow="right">{rightChild}</span>}
      </div>
      {props.children}
    </div>
  )
}

export default forwardRef(MenuGroup)
