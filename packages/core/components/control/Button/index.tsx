import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Button: ForwardRefRenderFunction<HTMLButtonElement, Types.Props> = (props, ref) => {
  const { disabled, decoration = 'filled', shape = 'rounded', size = 'm' } = props
  const { classes, attributes, events } = useSystem('Button', props, createClasses, { focus: 'tabOnly' })

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      events.onClick?.(event)
    }
  }

  const styleState = { shape, decoration, size }

  return (
    <button
      {...attributes}
      {...events}
      ref={ref}
      css={classes.container(styleState)}
      onClick={onClick}
      disabled={props.disabled}
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
      {props.leftChild && <div css={classes.child({ align: 'left', ...styleState })}>{props.leftChild}</div>}
      {props.children || props.label}
      {props.rightChild && <div css={classes.child({ align: 'right', ...styleState })}>{props.rightChild} </div>}
    </button>
  )
}

export default forwardRef(Button)
