import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Button: ForwardRefRenderFunction<HTMLButtonElement, Types.Props> = (props, ref) => {
  const {
    decoration = 'filled',
    shape = 'rounded',
    size = 'm',
    leftChild,
    rightChild,
    children,
    disabled,
    label,
  } = props
  const { classes, attributes, events } = useSystem('Button', props, createClasses, { focus: 'tabOnly' })
  const classState = { shape, decoration, size }
  const leftChildClasses = classes.child({ align: 'left', ...classState })
  const rightChildClasses = classes.child({ align: 'left', ...classState })
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      events.onClick?.(event)
    }
  }

  return (
    <button
      {...attributes}
      {...events}
      ref={ref}
      css={classes.container(classState)}
      onClick={onClick}
      disabled={disabled}
      form={props.form}
      formAction={props.formAction}
      formEncType={props.formEncType}
      formMethod={props.formMethod}
      formNoValidate={props.formNoValidate}
      formTarget={props.formTarget}
      name={props.name}
      type={props.type}
      value={props.value}
    >
      {leftChild && <div css={leftChildClasses}>{leftChild}</div>}
      {children || label}
      {rightChild && <div css={rightChildClasses}>{rightChild} </div>}
    </button>
  )
}

export default forwardRef(Button)
