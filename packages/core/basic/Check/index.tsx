import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import { useSystem } from '@stage-ui/system'
import CheckTypes from './types'
import createClasses from './styles'

const Check: ForwardRefRenderFunction<HTMLDivElement, CheckTypes.PrivateProps> = (props, ref) => {
  const {
    label,
    disabled,
    size,
    uppercase,
    defaultValue,
    children,
    checked: checkedProp,
    name,
  } = props
  const {
    classes,
    attributes,
    events: { onChange, onKeyDown, onClick, ...events },
  } = useSystem('Check' || name, props, createClasses)
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
  function handleChange() {
    onChange?.(checked)
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
      handleChange()
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
      handleChange()
    }
    onClick?.(e)
  }

  return (
    <div
      ref={ref}
      {...attributes}
      {...events}
      css={classes.container({ disabled })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
        events.onFocus?.(e)
      }}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false)
        events.onBlur?.(e)
      }}
    >
      {children(checked, focus)}
      {label && label.length && (
        <div css={classes.label({ disabled, size, uppercase })}>{label}</div>
      )}
    </div>
  )
}

export default forwardRef(Check)
