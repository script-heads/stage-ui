import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import CheckTypes from './types'

const Check: ForwardRefRenderFunction<HTMLDivElement, CheckTypes.PrivateProps> = (props, ref) => {
  const {
    label,
    disabled,
    size,
    uppercase,
    defaultValue,
    classes,
    onChange,
    onFocus,
    onBlur,
    onClick,
    onKeyDown,
    children,
    checked: checkedProp,
  } = props

  const [focus, setFocus] = useState(false)
  const [checked, setChecked] = useState(checkedProp || defaultValue || false)

  useEffect(() => {
    if (typeof checked !== 'undefined') {
      setChecked(checked)
    }
  }, [checked])

  /**
   * Change handler
   */
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    onChange?.(event)
    if (typeof checked === 'undefined') {
      setChecked(!checked)
    }
  }
  /*
   * Keyboard control
   */
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    /**
     * Enter or Space
     */
    if (event.keyCode === 0x0d || event.keyCode === 0x20) {
      handleChange(event)
      /**
       * Prevent page scrolling
       */
      if (event.keyCode === 0x20) {
        event.preventDefault()
      }
    }
    onKeyDown?.(event)
  }

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    if (!disabled) {
      handleChange(e)
    }
    onClick?.(e)
  }

  const containerProps = {
    ref,
    css: classes.container({ disabled }),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true)
      onFocus?.(e)
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false)
      onBlur?.(e)
    },
  }

  return (
    <div {...containerProps}>
      {children(checked, focus)}
      {label && label.length && <div css={classes.label({ disabled, size, uppercase })}>{label}</div>}
    </div>
  )
}

export default forwardRef(Check)
