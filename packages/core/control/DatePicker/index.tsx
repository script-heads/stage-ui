import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { Calendar as CalendarIcon } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import 'dayjs/locale/ru'

import dayjs, { Dayjs } from 'dayjs'

import Field from '../../basic/Field'
import Drop from '../../layout/Drop'
import Calendar from '../Calendar'

import createClasses from './styles'
import Types from './types'

const DatePicker: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props,
  ref,
) => {
  const {
    locale = 'ru',
    format = 'DD.MM.YYYY',
    defaultValue,
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
    disabled,
    rightChild,
    onChange: onChangeProp,
    onChangeRange: onChangeRangeProp,

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
    shortcuts,
    clearOnUndefined,
    ...fieldProps
  } = props

  dayjs.locale(locale)

  function makeDate(value?: Dayjs | Date | string): Dayjs | undefined {
    const date = dayjs(value, format, true)
    return value && date.isValid() ? date : undefined
  }

  const { classes, events, styleProps, propOverridesClasses } = useSystem(
    'DatePicker',
    props,
    createClasses,
  )
  let initialValue: [Date | undefined, Date | undefined] = [undefined, undefined]
  let initialInputValue = ''
  const propsValue = props.value || props.defaultValue
  if (propsValue) {
    if (Array.isArray(propsValue)) {
      const dtStart = makeDate(propsValue[0])
      const dtEnd = makeDate(propsValue[1])
      initialValue = [dtStart?.toDate(), dtEnd?.toDate()]
      if (dtStart?.isValid()) {
        if (dtEnd?.isValid()) {
          if (dtStart?.unix() !== dtEnd?.unix()) {
            initialInputValue = `${dtStart.format(format) || ''} - ${
              dtEnd.format(format) || ''
            }`
          } else {
            initialInputValue = dtStart.format(format)
          }
        }
      }
    } else {
      const dt = makeDate(propsValue)
      initialInputValue = dt?.format(format) || ''
      initialValue = [dt?.toDate(), dt?.toDate()]
    }
  }
  const [value, setValue] = useState(initialValue)
  const [inputValue, setInputValue] = useState(initialInputValue)
  const [isActive, setActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const innerRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

  const minValue = props.minValue
    ? dayjs(props.minValue).startOf('day')
    : dayjs().clone().add(-500, 'year')
  const maxValue = props.maxValue
    ? dayjs(props.maxValue).startOf('day')
    : dayjs().clone().add(500, 'year')

  function onChange(startDt?: Date, endDt?: Date): void {
    setValue([startDt, endDt])
    if (!startDt) {
      setInputValue('')
      onChangeProp?.()
      if (props.range) {
        onChangeRangeProp?.([undefined, undefined])
      }
      setActive(props.stayOpen || false)
      return
    }
    let stringDate = ''
    if (startDt) {
      stringDate += dayjs(startDt).format(format)
    }
    if (endDt && dayjs(startDt).unix() !== dayjs(endDt).unix()) {
      if (stringDate) {
        stringDate += ' - '
        stringDate += dayjs(endDt).format(format)
      }
    }

    setInputValue(stringDate)
    onChangeProp?.(startDt, dayjs(startDt).format(format))
    if (props.range) {
      onChangeRangeProp?.([startDt, endDt])
      if (endDt) {
        setActive(props.stayOpen || false)
      }
    } else {
      setActive(props.stayOpen || false)
    }
  }

  useLayoutEffect(() => {
    if (typeof props.value !== 'undefined') {
      if (Array.isArray(props.value)) {
        setValue([makeDate(props.value[0])?.toDate(), makeDate(props.value[1])?.toDate()])
      } else {
        setValue([makeDate(props.value)?.toDate(), undefined])
      }

      return
    }

    if (clearOnUndefined) {
      setValue([undefined, undefined])
      setInputValue('')
    }
  }, [props.value])

  return (
    <Field
      {...fieldProps}
      ref={innerRef}
      disabled={disabled}
      tabIndex={tabIndex}
      decoration={decoration}
      clearable={!!(inputValue && props.clearable)}
      size={size}
      shape={shape}
      overrides={{
        ...propOverridesClasses,
        container: [propOverridesClasses.container, styleProps.container],
        content: [propOverridesClasses.content, styleProps.content],
      }}
      onFocus={() => inputRef.current?.focus()}
      onClick={(e) => {
        events.onClick?.(e)
        if (!props.disabled && !isActive) {
          setActive(true)
        }
      }}
      onClear={async () => {
        console.log('clears', props.onClear)
        const v = props.onClear?.()
        if (!props.value) {
          onChange(undefined, undefined)
        }
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
          // TODO change by input
          // onChange(e.target.value)
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
        target={innerRef}
        visible={isActive}
        spacing={8}
        onClickOutside={(event, outsideTarget) => {
          if (outsideTarget) {
            setActive(false)
          }
        }}
        css={classes.drop({ isActive })}
      >
        <Calendar
          shortcuts={shortcuts}
          value={value}
          minValue={minValue.toDate()}
          maxValue={maxValue.toDate()}
          onChange={onChange}
          hideToday={props.hideToday || false}
          type={props.type || 'day'}
          range={props.range}
          locale={locale}
        />
      </Drop>
    </Field>
  )
}

export default forwardRef(DatePicker)
