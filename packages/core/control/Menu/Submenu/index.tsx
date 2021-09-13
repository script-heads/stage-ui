import { ChevronDown } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import MenuItem from '../MenuItem'
import createClasses from './styles'
import Types from './types'

const Submenu: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { rightChild, leftChild, disabled } = props

  const [open, setOpen] = useState(props.open || props.defaultOpen || false)

  const { classes, attributes, events, styleProps } = useSystem('Submenu', props, createClasses)
  const attr: Record<string, string> = {
    'data-flow': 'sub-menu',
  }
  if (open) attr['data-flow-open'] = ''
  if (disabled) attr['data-flow-disabled'] = ''

  return (
    <div {...attr}>
      <MenuItem
        disabled={disabled || false}
        title={props.title}
        leftChild={leftChild}
        rightChild={
          rightChild || (
            <div data-flow="sub-menu-arrow">
              <ChevronDown color="light" size="1.25rem" rotate={!open ? 90 : 0} />
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
        ref={ref}
        css={[classes.container, styleProps.all]}
      >
        {props.children || props.title}
      </div>
    </div>
  )
}

export default forwardRef(Submenu)
