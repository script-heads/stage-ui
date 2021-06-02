/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Drop, ScrollView } from '@stage-ui/core'
import { ArrowIosDownward, Close } from '@stage-ui/core/icons'
import DropTypes from '@stage-ui/core/layout/Drop/types'
import Field from '@stage-ui/core/misc/hocs/Field'
import { useComponent } from '@stage-ui/system'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import styles from './styles'
import Types from './types'

const Select: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
    maxScrollHeight = '16rem',
    keepOpen = false,
    disabled = false,
    openOnFocus = true,
    emptyText = '-',
  } = props

  /**
   * References
   */
  const fieldRef = useRef<HTMLDivElement>(null)
  const dropRef = useRef<DropTypes.Ref>(null)
  /**
   * Drop will show only
   * if isOpen === true
   * and values.length > 0
   */
  const [isOpen, setOpen] = useState(false)
  /**
   * Value need for search
   */
  const [searchQuery, setSearchQuery] = useState('')
  /**
   * Store of selected values
   */
  const [values, setValues] = useState<Types.Option[]>([])
  /**
   * This options will be shown in drop
   */
  const options = props.options.filter((option) => {
    // Filter only unselected values
    if (values.find((o) => o.value === option.value) && props.multiselect) {
      return false
    }
    // Filter only matching search
    if (searchQuery && !RegExp(searchQuery.toUpperCase()).exec(option.text.toUpperCase())) {
      return false
    }
    return true
  })

  const { cs, attributes, events, focus } = useComponent(
    'Select',
    {
      props,
      styles,
      styleProps: {
        container: ['flow', 'layout'],
        field: ['color', 'border', 'padding'],
      },
      focus: {
        applyDecoration: false,
      },
    },
    {
      isOpen: isOpen && options.length > 0,
    },
  )

  /**
   * Object for variant styles
   */
  const styleState: Types.StyleState = {
    decoration,
    shape,
    size,
    isOpen,
    focus,
  }
  /**
   * Component did mount
   */
  useEffect(() => {
    if (props.defaultValues) {
      setValues(props.defaultValues)
    }
  }, [])

  /**
   * Component will receive value
   */
  useEffect(() => {
    if (props.values) {
      setValues(props.values)
    }
  }, [props.values])

  /**
   * Update drop position after
   * field changing his height
   */
  useEffect(() => {
    isOpen && dropRef.current?.updatePosition()
  }, [values])

  /*
   * Keyboard control
   * TODO: handle keyboard control
   */
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'Enter':
        break
      case 'ArrowUp':
        break
      case 'ArrowDown':
        break
      case 'Backspace':
        break
    }
    props.onKeyDown && props.onKeyDown(event)
  }

  /**
   * Open and close select drop
   */
  function toggleOpen(e?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e?.stopPropagation()
    if (!isOpen && disabled) {
      return
    }
    setOpen(!isOpen)
  }

  /**
   * Call when ever values change
   * support controlled and uncontrolled
   * second arg need if you need filter values by search
   */
  function onChange(values: Types.Option[], value?: Types.Option, search = '') {
    setSearchQuery(search)
    props.onSearch?.(value?.text ?? search)
    if (props.values === undefined) {
      setValues(values)
    }
    props.onChange?.(values, value)
  }

  /**
   * Setting values
   */
  function setOption(value: Types.Option) {
    if (props.multiselect) {
      onChange(values.concat(value), value)
    } else {
      onChange([value], value)
    }
    if (!keepOpen) {
      setOpen(false)
    }
  }

  /**
   * Unsetting values
   */
  function unsetOption(value: Types.Option) {
    onChange(
      values.filter((v) => v.value !== value.value),
      value,
    )
  }

  /**
   * Clears values
   * also can set filter for search
   */
  function clearValues(search = '') {
    onChange([], undefined, search)
  }

  useImperativeHandle(ref, () => ({
    ...fieldRef,
    isOpen,
    options,
    values,
    toggleOpen,
  }))

  return (
    <>
      <Field
        {...props}
        styles={cs}
        ref={fieldRef}
        size={size}
        state={styleState}
        focus={focus}
        disabled={disabled}
        shape={shape}
        decoration={decoration}
        clearable={disabled ? false : props.clearable && values.length > 0}
        onClear={() => clearValues()}
        attributes={{ ...attributes, tabIndex }}
        events={{
          ...events.all,
          onClick: (e) => {
            e.preventDefault()
            if (openOnFocus) {
              setOpen(true)
            }
            events.all.onClick?.(e)
          },
          onKeyDown: (e) => handleKeyDown(e),
        }}
        rightChild={
          props.rightChild !== undefined ? (
            props.rightChild
          ) : (
            <ArrowIosDownward
              alignSelf="center"
              size={size}
              style={{
                transition: 'transform 0.25s',
                transform: `scale(1.5) rotate(${isOpen ? '90deg' : 0})`,
              }}
              color={(c) => (isOpen ? c.primary : c.light)}
              onClick={(e) => {
                e.preventDefault()
                toggleOpen(e)
              }}
            />
          )
        }
        children={
          <div css={cs.selected}>
            {props.multiselect &&
              values.map((option) => (
                <div css={cs.tag(styleState)} key={option.value}>
                  {option.text}
                  {!disabled && (
                    <Close
                      size={size}
                      css={cs.tagRemove(styleState)}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        unsetOption(option)
                      }}
                    />
                  )}
                </div>
              ))}
            <input
              size={5}
              disabled={disabled || !props.searchable}
              css={cs.input({
                disableEvents: !props.searchable,
                searchMode: searchQuery !== '',
                multiselect: !!props.multiselect,
              })}
              placeholder={!props.multiselect || values.length === 0 ? props.placeholder : ''}
              value={(!props.multiselect && values[0]?.text) || searchQuery}
              onChange={(e) => {
                if (!isOpen) {
                  setOpen(true)
                }
                if (props.multiselect) {
                  props.onSearch?.(e.target.value)
                  setSearchQuery(e.target.value)
                } else {
                  clearValues(e.target.value)
                }
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (openOnFocus) {
                  setOpen(true)
                }
              }}
            />
          </div>
        }
      />
      <Drop
        visible={isOpen}
        ref={dropRef}
        animation={
          props.animation || {
            type: 'slide',
            duration: 100,
            reverse: true,
          }
        }
        onClickOutside={(e, outTarget) => {
          if (outTarget) {
            // @ts-ignore
            setOpen(false)
          }
        }}
        stretchWidth
        target={fieldRef}
        children={
          <div css={cs.drop(styleState)}>
            <ScrollView
              size="xs"
              css={{ maxHeight: maxScrollHeight }}
              sendFlowScollEvent={false}
              children={
                <>
                  {options.map((option) => (
                    <div
                      css={cs.dropItem({ ...styleState, selected: values.includes(option) })}
                      key={option.value}
                      children={option.text}
                      onClick={(e) => {
                        e.preventDefault()
                        setOption(option)
                      }}
                    />
                  ))}
                  {options.length === 0 && (
                    <div css={cs.emptyConteiner}>
                      <div css={cs.emptyText}>{emptyText}</div>
                    </div>
                  )}
                </>
              }
            />
          </div>
        }
      />
    </>
  )
}

export default forwardRef(Select)
