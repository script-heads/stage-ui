/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useMask from '@stage-ui/core/hooks/useMask'
import { Calendar as CalendarIcon } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import Field from '../../basic/Field'
import Drop from '../../layout/Drop'
import Popover from '../../layout/Popover'
import Calendar from '../Calendar'
import maskConf from './mask'
import createClasses from './styles'
import Types from './types'

const DatePicker: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const {
    locale = 'ru',
    format = 'YYYY-MM-DD',
    defaultValue,
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
  } = props

  moment.locale(locale)

  const now = moment()
  const [value, setValue] = useState(now)
  const [isActive, setActive] = useState(false)
  const { classes, events, styleProps, overridesPropClasses } = useSystem(
    'DatePicker',
    props,
    createClasses,
  )

  const minValue = props.minValue
    ? moment(props.minValue).startOf('day')
    : now.clone().add(-500, 'year')
  const maxValue = props.maxValue
    ? moment(props.maxValue).startOf('day')
    : now.clone().add(500, 'year')

  const inputRef = useRef<HTMLInputElement>(null)
  const mask = props.masked && useMask(inputRef, maskConf(format, minValue, maxValue))

  function onChange(currentValue: Moment) {
    if (!currentValue.isValid) {
      return
    }

    if (mask) {
      mask.value = currentValue.format(format)
    } else if (inputRef.current) {
      inputRef.current.value = currentValue.format(format)
    }

    setValue(currentValue)

    if (props.onChange) {
      props.onChange(value, value.format(format))
    }
    if (!props.stayOpen) {
      setActive(false)
    }
  }

  useLayoutEffect(() => {
    if (props.value) {
      if (typeof props.value === 'string') {
        onChange(moment(props.value, format))
      } else {
        onChange(moment(props.value))
      }
    }
  }, [props.value])

  return (
    <Field
      {...props}
      tabIndex={tabIndex}
      ref={ref}
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
        if (!props.disabled) {
          setActive(true)
        }
      }}
      rightChild={props.rightChild || <CalendarIcon />}
    >
      <input
        ref={inputRef}
        onKeyUp={(e) => {
          const date = moment(
            (
              e as React.KeyboardEvent<HTMLInputElement> & {
                target: { value: string }
              }
            ).target.value,
            format,
          )
          if (date.isValid() && date > minValue && date < maxValue) {
            setValue(date)
          }
        }}
        css={classes.input}
        defaultValue={
          defaultValue ? moment(defaultValue, format).format(format) : moment().format(format)
        }
        disabled={props.disabled}
        autoComplete={props.autoComplete}
        list={props.list}
        name={props.name}
        placeholder={props.placeholder}
        pattern={props.pattern}
        readOnly={props.readOnly}
        required={props.required}
        form={props.form}
        formAction={props.formAction}
        formEncType={props.formEncType}
        formMethod={props.formMethod}
        formNoValidate={props.formNoValidate}
        formTarget={props.formTarget}
        tabIndex={-1}
      />
      <Drop
        target={inputRef}
        visible={isActive}
        spacing={9}
        align="bottom"
        justify="start"
        onClickOutside={(event) => {
          if (event.target !== inputRef.current) {
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
