/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const MenuGroup: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { rightChild, leftChild } = props

  const { classes, attributes, events } = useSystem('MenuGroup', {
    props,
    styles,
    styleProps: {
      container: ['all'],
    },
  })

  return (
    <div {...attributes} {...events} onChange={undefined} data-flow="menu-group" css={classes.container}>
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
