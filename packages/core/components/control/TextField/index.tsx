import { jsx } from '@emotion/react'
import Field from '@stage-ui/core/components/basic/Field'
import additionalClasses from '@stage-ui/core/components/basic/Field/styles'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useEffect, useState } from 'react'
import styles from './styles'
import Types from './types'

const TextField: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
    multiline = false,
    disabled = false,
    leftChildNumber,
  } = props

  const { classes, attributes, events } = useSystem('TextField', props, styles, {
    additionalClasses: additionalClasses as Stage.CreateAdditionalClasses<Types.Styles, Types.Props>,
  })

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  function onClear() {
    if (inputRef.current) {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(inputRef.current, '')

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  const leftCountLineRef = useRef<HTMLDivElement>(null)
  const [leftCountLineState, setleftCountLineState] = useState({
    count: 0,
    top: '0px',
  })

  useEffect(() => {
    if (leftChildNumber) {
      const value = (props.defaultValue || props.value || '').toString()
      setleftCountLineState({
        count: value.split(`\n`).length,
        top: leftCountLineState.top,
      })
    }
  }, [])

  const fieldRef = useRef<HTMLDivElement>(null)

  /**
   * Handle refs
   */
  useImperativeHandle(ref, () => ({
    clear: () => onClear(),
    container: fieldRef.current,
    input: inputRef.current,
  }))

  const LeftCountLine = () => {
    if (!leftChildNumber) {
      return null
    }
    const arr = new Array(leftCountLineState.count).fill('')
    const render = typeof leftChildNumber === 'function' ? leftChildNumber : (index: number) => index + 1

    return (
      <>
        <div ref={leftCountLineRef} style={{ top: leftCountLineState.top }} css={classes.lineNumbers}>
          {arr.map((_, index) => (
            <div key={index}>{render(index)}</div>
          ))}
        </div>
        <div style={{ visibility: 'hidden' }}>{render(arr.length - 1)}</div>
      </>
    )
  }

  return (
    <Field
      {...props}
      ref={fieldRef}
      decoration={decoration}
      size={size}
      shape={shape}
      classes={classes}
      clearable={props.value !== undefined && !props.value ? false : props.clearable}
      leftChild={leftChildNumber && multiline ? <LeftCountLine /> : props.leftChild}
      onClear={onClear}
      onEsc={(e) => {
        if (props.clearable) {
          onClear()
        }
        props.onEsc?.(e)
      }}
      events={{
        ...events,
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
          inputRef.current?.focus()
          events.onFocus?.(e)
        },
      }}
      attributes={{
        ...attributes,
        tabIndex,
      }}
    >
      {jsx(props.multiline ? 'textarea' : 'input', {
        ref: inputRef,
        css: classes.input({ size, multiline, disabled }),
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (leftCountLineRef.current) {
            setleftCountLineState({
              count: e.target.value.split(`\n`).length,
              top: leftCountLineState.top,
            })
          }
        },
        defaultValue: props.defaultValue,
        value: props.value,
        disabled: props.disabled,
        autoComplete: props.autoComplete,
        autoFocus: props.autoFocus,
        list: props.list,
        name: props.name,
        placeholder: props.placeholder,
        pattern: props.pattern,
        readOnly: props.readOnly,
        required: props.required,
        type: props.type,

        form: props.form,
        formAction: props.formAction,
        formEncType: props.formEncType,
        formMethod: props.formMethod,
        formNoValidate: props.formNoValidate,
        formTarget: props.formTarget,

        max: props.max,
        maxLength: props.maxLength,
        min: props.min,
        minLength: props.minLength,
        step: props.step,
        cols: props.cols,
        rows: props.rows,
        wrap: props.wrap,
        tabIndex: props.tabIndex,
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => events.onFocus?.(e),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => events.onBlur?.(e),
        onScroll: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (leftCountLineRef.current) {
            setleftCountLineState({
              count: e.target.value.split(`\n`).length,
              top: `${-e.target.scrollTop}px`,
            })
          }
        },
      })}
    </Field>
  )
}

export default forwardRef(TextField)
