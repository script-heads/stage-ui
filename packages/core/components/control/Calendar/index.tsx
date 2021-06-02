import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import React, { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useRef, useState } from 'react'
import DateGrid from './DateGrid'
import createClasses from './styles'
import Types from './types'

const Calendar: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { locale = 'ru', hideToday = false, hideNeighborMonths = false } = props

  moment.locale(locale)

  const now = moment()
  const [value, setValue] = useState(now)

  const { classes, attributes, events } = useSystem('Calendar', props, createClasses)

  const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
  const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')

  useLayoutEffect(() => {
    if (props.value) {
      setValue(moment(props.value))
    }
  }, [props.value])

  function onChange(value: Moment) {
    if (!value.isValid) {
      return
    }

    setValue(value)

    if (props.onChange) {
      props.onChange(value)
    }
  }

  return (
    <DateGrid
      attributes={attributes}
      classes={classes}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      onChange={onChange}
      onViewChange={props.onViewChange}
      hideToday={hideToday}
      hideNeighborMonths={hideNeighborMonths}
      type={props.type || 'day'}
      onYearRender={props.onYearRender}
      onMonthRender={props.onMonthRender}
      onDayRender={props.onDayRender}
      header={props.header}
      footer={props.footer}
    />
  )
}

export default forwardRef(Calendar)
