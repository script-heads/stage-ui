import additionalClasses from '@stage-ui/core/components/basic/Field/styles'
import useMask from '@stage-ui/core/hooks/useMask'
import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useRef, useState } from 'react'
import Field from '../../basic/Field'
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
    label,
  } = props

  moment.locale(locale)

  const now = moment()
  const [value, setValue] = useState(now)
  const [isActive, setActive] = useState(false)
  const { classes, attributes, events, focus } = useSystem('DatePicker', props, createClasses, {
    additionalClasses: additionalClasses as Stage.CreateAdditionalClasses<Types.Classes, Types.Props>,
  })

  // TODO: container check
  // styleProps: {
  //   container: ['margin','flex','grid', 'layout'],
  //   field: ['color', 'border', 'padding'],
  // },
  

  const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
  const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')

  const inputRef = useRef<HTMLInputElement>(null)
  const mask = props.masked && useMask(inputRef, maskConf(format, minValue, maxValue))

  useLayoutEffect(() => {
    if (props.value) {
      if (typeof props.value === 'string') {
        onChange(moment(props.value, format))
      } else {
        onChange(moment(props.value))
      }
    }
  }, [props.value])

  function onChange(value: Moment) {
    if (!value.isValid) {
      return
    }

    if (mask) {
      mask.value = value.format(format)
    } else if (inputRef.current) {
      inputRef.current.value = value.format(format)
    }

    setValue(value)

    if (props.onChange) {
      props.onChange(value, value.format(format))
    }
    if (!props.stayOpen) {
      setActive(false)
    }
  }

  return (
    <>
      <Field
        {...props}
        ref={ref}
        decoration={decoration}
        size={size}
        shape={shape}
        focus={focus}
        styles={classes}
        events={{
          ...events,
          onFocus: (e) => {
            inputRef.current?.focus()
            events?.all?.onFocus?.(e)
            if (!props.disabled) {
              setActive(true)
            }
          },
          onClick: (e) => {
            events.all.onClick?.(e)
            if (!props.disabled) {
              setActive(true)
            }
          },
        }}
        attributes={{
          ...attributes,
          tabIndex,
        }}
        rightChild={props.rightChild || <CalendarIcon />}
        children={jsx('input', {
          ref: inputRef,
          onKeyUp: (e) => {
            const date = moment(e.target.value, format)
            if (date.isValid() && date > minValue && date < maxValue) {
              setValue(date)
            }
          },
          css: classes.input,

          defaultValue: defaultValue ? moment(defaultValue, format) : moment().format(format),
          disabled: props.disabled,
          autoComplete: props.autoComplete,
          autoFocus: props.autoFocus,
          list: props.list,
          name: props.name,
          placeholder: props.placeholder,
          pattern: props.pattern,
          readOnly: props.readOnly,
          required: props.required,
          // type: props.type,

          form: props.form,
          formAction: props.formAction,
          formEncType: props.formEncType,
          formMethod: props.formMethod,
          formNoValidate: props.formNoValidate,
          formTarget: props.formTarget,

          tabIndex: props.tabIndex,
          onFocus: (e) => props.onFocus && props.onFocus(e),
          onBlur: (e) => props.onBlur && props.onBlur(e),
        })}
      />
      <Drop
        visible={isActive}
        // TODO: wtf
        spacing={9}
        align="bottom"
        justify="start"
        onClickOutside={(event) => {
          if (event.target !== inputRef.current) {
            setActive(false)
          }
        }}
        target={inputRef}
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
    </>
  )
}

export default forwardRef(DatePicker)
