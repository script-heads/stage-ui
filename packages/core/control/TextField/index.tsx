import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react'

import { jsx } from '@emotion/react'
import Field from '@stage-ui/core/basic/Field'
import { isBrowser, useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const TextField: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    multiline = false,
    disabled = false,
    leftChildNumber,
    clearable = false,
    onFocus,

    defaultValue,
    value,
    autoComplete,
    autoFocus,
    list,
    name,
    placeholder,
    pattern,
    readOnly,
    required,
    type,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,
    max,
    maxLength,
    min,
    minLength,
    step,
    cols,
    rows,
    wrap,
  } = props

  const { classes, styleProps, overridesPropClasses } = useSystem(
    'TextField',
    props,
    createClasses,
  )

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const leftCountLineRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)

  const [leftCountLineState, setleftCountLineState] = useState({
    count: 0,
    top: '0px',
  })

  useEffect(() => {
    if (leftChildNumber) {
      const currentValue = (defaultValue || value || '').toString()
      setleftCountLineState({
        count: currentValue.split('\n').length,
        top: leftCountLineState.top,
      })
    }
  }, [])

  function onClear() {
    if (inputRef.current && isBrowser) {
      Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set?.call(inputRef.current, '')

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

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
    const render =
      typeof leftChildNumber === 'function'
        ? leftChildNumber
        : (index: number) => index + 1

    return (
      <>
        <div
          ref={leftCountLineRef}
          style={{ top: leftCountLineState.top }}
          css={classes.lineNumbers}
        >
          {arr.map((_, index) => (
            <div key={index}>{render(index)}</div>
          ))}
        </div>
        <div style={{ visibility: 'hidden' }}>{render(arr.length - 1)}</div>
      </>
    )
  }

  const lineNumberWidth = {
    xl: '1rem',
    l: '0.875rem',
    m: '0.625rem',
    s: '0.5rem',
    xs: '0.5rem',
  }

  const numbersOfDigitsOfCountLine = Math.floor(
    Math.log(leftCountLineState.count) * Math.LOG10E + 1 || 0,
  )

  return (
    <Field
      {...props}
      ref={fieldRef}
      decoration={decoration}
      size={size}
      shape={shape}
      clearable={value !== undefined && !value ? false : clearable}
      leftChild={leftChildNumber && multiline ? <LeftCountLine /> : props.leftChild}
      onClear={onClear}
      onFocus={(e) => {
        inputRef.current?.focus()
        onFocus?.(e)
      }}
      onEsc={() => {
        if (props.clearable) {
          onClear()
        }
      }}
      overrides={(theme) => ({
        ...overridesPropClasses,
        container: [overridesPropClasses.container, styleProps.container],
        field: [
          multiline && { padding: 0 },
          overridesPropClasses.field,
          styleProps.content,
        ],
        leftChild: [
          multiline && {
            position: 'relative',
            width: `calc(${theme.assets.field[size].indent} * 2 + ${numbersOfDigitsOfCountLine} * ${lineNumberWidth[size]})`,
            borderRadius: `${theme.radius.m} 0 0 ${theme.radius.m}`,
          },
          overridesPropClasses.leftChild,
          overridesPropClasses.lineNumbers,
        ],
        rightChild: [overridesPropClasses.rightChild],
      })}
    >
      {jsx(props.multiline ? 'textarea' : 'input', {
        ref: inputRef,
        css: classes.input({ size, multiline, disabled }),
        tabIndex: -1,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (leftCountLineRef.current) {
            setleftCountLineState({
              count: e.target.value.split('\n').length,
              top: leftCountLineState.top,
            })
          }
        },
        onScroll: (e: React.ChangeEvent<HTMLInputElement>) => {
          if (leftCountLineRef.current) {
            setleftCountLineState({
              count: e.target.value.split('\n').length,
              top: `${-e.target.scrollTop}px`,
            })
          }
        },
        disabled,
        defaultValue,
        value,
        autoComplete,
        autoFocus,
        list,
        name,
        placeholder,
        pattern,
        readOnly,
        required,
        type,
        form,
        formAction,
        formEncType,
        formMethod,
        formNoValidate,
        formTarget,
        max,
        maxLength,
        min,
        minLength,
        step,
        cols,
        rows,
        wrap,
      })}
    </Field>
  )
}

export default forwardRef(TextField)
