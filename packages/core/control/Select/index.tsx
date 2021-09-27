import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Drop, ScrollView } from '@stage-ui/core'
import { ChevronDown, Close } from '@stage-ui/icons'
import DropTypes from '@stage-ui/core/layout/Drop/types'
import Field from '@stage-ui/core/basic/Field'
import { useSystem } from '@stage-ui/system'
import createID from '@stage-ui/system/utils/createID'
import styles from './styles'
import Types from './types'
import SharedZIndex from '../../utils/SharedZIndex'

const Select: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    maxScrollHeight = '16rem',
    keepOpen = false,
    disabled = false,
    openOnFocus = true,
    emptyText = '-',
    clearable = false,
    rightChild,
    searchable,
    multiselect,
    animation,
    defaultValues,
    onKeyDown,
    ...fieldProps
  } = props

  const { classes, styleProps, overridesPropClasses } = useSystem('Select', props, styles)

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
  const [searchValue, setSearchValue] = useState('')
  /**
   * Store of selected values
   */
  const [values, setValues] = useState<Types.Option[]>([])
  /**
   * This options will be shown in drop
   */
  const options = props.options.filter((option) => {
    // Filter only unselected values
    if (values.find((o) => o.value === option.value) && multiselect) {
      return false
    }
    // Filter only matching search
    const escapeSearchValue = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').toUpperCase()
    if (escapeSearchValue && !RegExp(escapeSearchValue).exec(option.text.toUpperCase())) {
      return false
    }
    return true
  })

  /**
   * Object for variant styles
   */
  const classState: Types.ClassState = {
    decoration,
    shape,
    size,
    isOpen,
  }
  /**
   * Component did mount
   */
  useEffect(() => {
    if (defaultValues) {
      setValues(defaultValues)
    }
  }, [])

  /**
   * Component will receive value
   */
  useEffect(() => {
    if (props.values) {
      setValues(props.values)
    }
  }, [props.values?.map((value) => value.value).join()])

  /**
   * Update drop position after
   * field changing his height
   */
  useEffect(() => {
    if (isOpen) {
      dropRef.current?.updatePosition()
    }
  }, [isOpen, searchValue, options?.map((value) => value.value).join()])

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
    onKeyDown?.(event)
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
  function onChange(newValues: Types.Option[] = [], changedValue?: Types.Option) {
    if (props.values === undefined) {
      setValues(newValues)
    }
    props.onChange?.(newValues, changedValue)
    setSearchValue('')
  }
  /**
   * Setting values
   */
  function setOption(changedValue: Types.Option) {
    if (!keepOpen) {
      setOpen(false)
    }
    setTimeout(() => {
      if (props.multiselect) {
        onChange(values.concat(changedValue), changedValue)
      } else {
        onChange([changedValue], changedValue)
      }
    }, 100)
  }

  /**
   * Unsetting values
   */
  function unsetOption(changedValue?: Types.Option) {
    if (changedValue) {
      onChange(
        values.filter((v) => v.value !== changedValue.value),
        changedValue,
      )
    } else if (values.length > 0) {
      onChange(values.slice(0, -1))
    }
  }

  useImperativeHandle(ref, () => ({
    ...fieldRef,
    isOpen,
    options,
    values,
    toggleOpen,
  }))

  return (
    <Field
      {...fieldProps}
      ref={fieldRef}
      size={size}
      disabled={disabled}
      shape={shape}
      decoration={decoration}
      clearable={clearable && values.length > 0}
      onClear={onChange}
      onClick={(e) => {
        e.preventDefault()
        if (openOnFocus && !disabled) {
          setOpen(true)
        }
      }}
      onKeyDown={(e) => handleKeyDown(e)}
      overrides={{
        ...overridesPropClasses,
        container: [overridesPropClasses.container, styleProps.container],
        field: [
          isOpen && [
            {
              zIndex: SharedZIndex.increment + 2,
            },
            (decoration === 'filled' || decoration === 'underline' || decoration === 'none') && {
              borderColor: 'transparent',
            },
          ],
          decoration === 'none' && [{ padding: 0 }],
          overridesPropClasses.field,
          styleProps.content,
        ],
      }}
      rightChild={
        <>
          {rightChild}
          <ChevronDown
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
        </>
      }
    >
      <div css={classes.selected}>
        {multiselect &&
          values.map((option, index) => (
            <div css={classes.tag(classState)} key={createID()}>
              {props.onRenderItem?.(option, index) || option.text}
              {!disabled && (
                <Close
                  size={size}
                  css={classes.tagRemove(classState)}
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
          type="text"
          tabIndex={-1}
          size={5}
          disabled={disabled || !searchable}
          css={classes.input({
            disableEvents: !searchable,
            searchMode: searchValue !== '',
            multiselect: !!multiselect,
          })}
          placeholder={!multiselect || values.length === 0 ? props.placeholder || '' : ''}
          value={multiselect ? searchValue : searchValue || values[0]?.text || ''}
          onKeyDown={(e) => {
            if (multiselect) {
              if (!searchValue && e.code === 'Backspace') {
                unsetOption()
              }
            }
          }}
          onChange={(e) => {
            if (!isOpen && !disabled) {
              setOpen(true)
            }
            if (!multiselect) {
              onChange()
            }
            setSearchValue(e.target.value)
            props.onSearch?.(e.target.value)
          }}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (openOnFocus && !disabled) {
              setOpen(true)
            }
          }}
        />
      </div>
      <Drop
        visible={isOpen}
        ref={dropRef}
        animation={
          animation || {
            type: 'slide',
            duration: 100,
            reverse: true,
          }
        }
        onClickOutside={(e, outTarget) => {
          if (outTarget) {
            setOpen(false)
          }
        }}
        stretchWidth
        target={fieldRef}
      >
        <ScrollView
          preventStageEvents
          size="xs"
          xBarPosition="none"
          overrides={{
            content: {
              maxHeight: maxScrollHeight,
            },
            wrapper: classes.drop(classState),
          }}
        >
          {options.map((option) => (
            <div
              css={classes.dropItem({
                ...classState,
                selected: values.map((item) => item.value).includes(option.value),
              })}
              key={createID()}
              onClick={(e) => {
                e.stopPropagation()
                setOption(option)
              }}
            >
              {option.text}
            </div>
          ))}
          {options.length === 0 && (
            <div css={classes.emptyContainer(classState)}>
              <div css={classes.emptyText(classState)}>{emptyText}</div>
            </div>
          )}
        </ScrollView>
      </Drop>
    </Field>
  )
}

export default forwardRef(Select)
