import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import { ArrowDown } from '@stage-ui/icons'
import MenuItem from '../MenuItem'
import styles from './styles'
import Types from './types'

const Submenu: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { rightChild, leftChild, disabled, indent } = props

  const [open, setOpen] = useState(props.open || props.defaultOpen || false)

  const { classes, attributes, events } = useSystem('Submenu', props, styles)
  const attr: Record<string, string> = {
    'data-flow': 'sub-menu',
  }
  if (open) attr['data-flow-open'] = ''
  if (disabled) attr['data-flow-disabled'] = ''

  return (
    <div {...attr}>
      <MenuItem
        disabled={disabled}
        title={props.title}
        leftChild={leftChild}
        rightChild={
          rightChild || (
            <div data-flow="sub-menu-arrow">
              <ArrowDown />
            </div>
          )
        }
        onClick={() => {
          if (!disabled) {
            setOpen(!open)
          }
        }}
      />
      <div
        data-flow="sub-menu-content"
        {...attributes}
        {...events}
        onChange={undefined}
        ref={ref}
        css={classes.container}
      >
        {props.children || props.title}
      </div>
    </div>
  )
}

export default forwardRef(Submenu)
