import React, { forwardRef, useEffect, useState, ForwardRefRenderFunction } from 'react'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Radio: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { tabIndex = 0, label, disabled, defaultValue, checked: checkedProp = false } = props

  const { classes, attributes, events, styleProps } = useSystem('Radio', props, createClasses, {
    focus: 'tabOnly',
  })

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
    setChecked(!checked)
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
      {...restEvents}
      tabIndex={-1}
      css={[classes.container, styleProps.all]}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="radio"
      aria-checked={checked}
    >
      <div
        tabIndex={tabIndex}
        css={classes.check({ checked })}
        onFocus={events.onFocus}
        onBlur={events.onBlur}
      >
        <div css={classes.icon({ checked })} />
      </div>
      {label && label.length && <div css={classes.label}>{label}</div>}
    </div>
  )
}

export default forwardRef(Radio)
