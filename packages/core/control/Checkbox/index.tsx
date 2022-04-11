import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'

import { Checkmark, Minus } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props: Types.Props,
  ref,
) => {
  const {
    tabIndex = 0,
    label,
    disabled,
    defaultValue,
    checked: checkedProp,
    half = false,
  } = props

  const { classes, attributes, events, styleProps } = useSystem(
    'Checkbox',
    props,
    createClasses,
    {
      focus: 'tabOnly',
    },
  )

  const { onClick, onChange, onKeyDown, ...restEvents } = events

  const [checked, setChecked] = useState(checkedProp || defaultValue || false)

  useEffect(() => {
    setChecked(checkedProp)
  }, [checkedProp])

  /**
   * Change handler
   */
  function handleChange() {
    onChange?.(checked)
    if (checkedProp === undefined) {
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

  const Icon = half && !checked ? Minus : Checkmark

  return (
    <div
      ref={ref}
      {...attributes}
      {...restEvents}
      tabIndex={-1}
      css={[classes.container, styleProps.all]}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={checked}
    >
      <div
        tabIndex={tabIndex}
        css={classes.check({ checked, half })}
        onFocus={events.onFocus}
        onBlur={events.onBlur}
      >
        <Icon css={classes.icon({ checked, half })} />
      </div>
      {label && label.length && <div css={classes.label}>{label}</div>}
    </div>
  )
}

export default forwardRef(Checkbox)
