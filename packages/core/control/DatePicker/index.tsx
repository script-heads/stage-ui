import { Calendar as CalendarIcon } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useState } from 'react'
import Field from '../../basic/Field'
import Drop from '../../layout/Drop'
import Popover from '../../layout/Popover'
import Calendar from '../Calendar'
import createClasses from './styles'
import Types from './types'

const DatePicker: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const {
    locale = 'ru',
    format = 'DD/MM/YYYY',
    defaultValue,
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
    disabled,
    rightChild,
    onChange: onChangeProp,

    autoComplete,
    list,
    name,
    placeholder,
    pattern,
    readOnly,
    required,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,

    ...fieldProps
  } = props

  moment.locale(locale)

  function makeDate(value: Types.Props['value']): Moment | undefined {
    const date = moment(value, format, true)
    return value && date.isValid() ? date : undefined
  }

  const { classes, events, styleProps, overridesPropClasses } = useSystem(
    'DatePicker',
    props,
    createClasses,
  )
  const [value, setValue] = useState(makeDate(props.value || defaultValue))
  const [inputValue, setInputValue] = useState(
    makeDate(props.value || defaultValue)?.format(format),
  )
  const [isActive, setActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const minValue = props.minValue
    ? moment(props.minValue).startOf('day')
    : moment().clone().add(-500, 'year')
  const maxValue = props.maxValue
    ? moment(props.maxValue).startOf('day')
    : moment().clone().add(500, 'year')

  function onChange(currentValue: Types.Props['value']) {
    if (!currentValue) {
      onChangeProp?.(undefined, currentValue)
      setInputValue('')
      return
    }
    const currentDate = makeDate(currentValue)
    let currentDateString = currentValue
    if (currentDate) {
      currentDateString = currentDate.format(format)
      setValue(currentDate)
      setActive(props.stayOpen || false)
    }
    onChangeProp?.(currentDate, currentDateString as string)
    setInputValue(currentDateString as string)
  }

  useEffect(() => {
    setValue(makeDate(props.value))
  }, [props.value])

  return (
    <Field
      {...fieldProps}
      ref={ref}
      disabled={disabled}
      tabIndex={tabIndex}
      decoration={decoration}
      size={size}
      shape={shape}
      overrides={{
        ...overridesPropClasses,
        container: [overridesPropClasses.container, styleProps.container],
        content: [overridesPropClasses.content, styleProps.content],
      }}
      onFocus={() => inputRef.current?.focus()}
      onClick={(e) => {
        events.onClick?.(e)
        if (!props.disabled && !isActive) {
          setActive(true)
        }
      }}
      onClear={() => {
        onChange(undefined)
      }}
      rightChild={
        <>
          {rightChild}
          <CalendarIcon />
        </>
      }
    >
      <input
        ref={inputRef}
        css={classes.input}
        tabIndex={-1}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        value={inputValue}
        disabled={disabled}
        autoComplete={autoComplete}
        list={list}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        readOnly={readOnly}
        required={required}
        form={form}
        formAction={formAction}
        formEncType={formEncType}
        formMethod={formMethod}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
      />
      <Drop
        target={inputRef}
        visible={isActive}
        spacing={9}
        align="bottom"
        justify="start"
        onClickOutside={(event, outsideTarget) => {
          if (outsideTarget) {
            setActive(false)
          }
        }}
      >
        <Popover css={classes.drop({ isActive })}>
          <Calendar
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            onChange={onChange}
            hideToday={props.hideToday || false}
            type={props.type || 'day'}
          />
        </Popover>
      </Drop>
    </Field>
  )
}

export default forwardRef(DatePicker)
