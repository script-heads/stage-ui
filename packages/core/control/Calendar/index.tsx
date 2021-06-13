import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import React, { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useState } from 'react'
import DateGrid from './DateGrid'
import createClasses from './styles'
import Types from './types'

const Calendar: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const {
    locale = 'ru',
    hideToday = false,
    hideNeighborMonths = false,
    type,
    header,
    footer,
    onViewChange,
    onYearRender,
    onMonthRender,
    onDayRender,
  } = props

  moment.locale(locale)

  const now = moment()
  const [value, setValue] = useState(now)

  const { classes, attributes } = useSystem('Calendar', props, createClasses)

  const minValue = props.minValue
    ? moment(props.minValue).startOf('day')
    : now.clone().add(-500, 'year')
  const maxValue = props.maxValue
    ? moment(props.maxValue).startOf('day')
    : now.clone().add(500, 'year')

  useLayoutEffect(() => {
    if (props.value) {
      setValue(moment(props.value))
    }
  }, [props.value])

  function onChange(newValue: Moment) {
    if (!newValue.isValid) {
      return
    }

    setValue(newValue)

    if (props.onChange) {
      props.onChange(newValue)
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
      onViewChange={onViewChange}
      hideToday={hideToday}
      hideNeighborMonths={hideNeighborMonths}
      type={type || 'day'}
      onYearRender={onYearRender}
      onMonthRender={onMonthRender}
      onDayRender={onDayRender}
      header={header}
      footer={footer}
    />
  )
}

export default forwardRef(Calendar)
