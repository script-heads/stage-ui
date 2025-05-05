/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react'

import { useSystem } from '@stage-ui/system'

import Spinner from '../../content/Spinner'

import createClasses from './styles'
import Types from './types'

const Button: ForwardRefRenderFunction<HTMLButtonElement, Types.Props> = (props, ref) => {
  const [pending, setPending] = useState(false)
  let { leftChild, rightChild, children } = props
  const { disabled, label, loadingComponent } = props
  const {
    classes,
    attributes,
    events: { onFocus, onFocusCapture, ...events },
    styleProps,
  } = useSystem('Button', props, createClasses, {
    focus: 'tabOnly',
  })

  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && !pending) {
      const promise = events.onClick?.(event)
      if (promise instanceof Promise) {
        setPending(true)
        promise
          .then(() => {
            setPending(false)
          })
          .catch(() => {
            setPending(false)
          })
      }
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key !== 'Tab') {
      event.preventDefault()
    }

    if (disabled || pending) return
    events.onKeyDown?.(event)
  }

  /**
   * Support for async onClick
   */
  if (pending && rightChild) {
    rightChild = loadingComponent || <Spinner />
  } else if (pending && leftChild) {
    leftChild = loadingComponent || <Spinner />
  } else if (pending) {
    children = loadingComponent || <Spinner />
  }

  return (
    <button
      {...attributes}
      {...events}
      ref={ref}
      css={[classes.container, styleProps.all]}
      onClick={onClick}
      onKeyDown={onKeyDown}
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
      {leftChild && <div css={classes.child({ align: 'left' })}>{leftChild}</div>}
      {children || label}
      {rightChild && <div css={classes.child({ align: 'right' })}>{rightChild} </div>}
    </button>
  )
}

export default forwardRef(Button)
