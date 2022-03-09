import { Flexbox, Text } from '@stage-ui/core'
import moment from 'moment'
import React from 'react'
import T from './types'

const DateGridDay = (props: T.DateGridDayProps) => {
  const { day, viewDate, active, minValue, maxValue, type, hideNeighborMonths } = props

  const now = moment()

  const isDisabled =
    minValue.valueOf() > moment(day).valueOf() ||
    maxValue.valueOf() < moment(day).valueOf() ||
    false

  const dayValue = day.startOf('day').valueOf()
  const nowValue = now.startOf('day').valueOf()
  const dtStart = active[0]?.startOf('day')
  const dtEnd = active[1]?.startOf('day')
  const activeValue = dtStart?.startOf('day').valueOf()
  const isActive = activeValue === dayValue
  const isCurrent = dayValue === nowValue
  const isCurrentMonth = day.month() === viewDate.month()
  const isHidden = !isCurrentMonth && hideNeighborMonths
  const isWeekend = [5, 6].indexOf(day.weekday()) !== -1
  const isRange = !!(dtStart && dtEnd && day >= dtStart && day <= dtEnd)
  const isRangeStart = !!(dtStart && dtEnd && dtStart.toString() === day.toString())
  const isRangeEnd = !!(dtStart && dtEnd && dtEnd.toString() === day.toString())
  const isWeekType = type === 'week'
  const isDayType = type === 'day'

  const dayStyles = props.classes.day({
    isWeekType,
    isActive,
    isRange,
    isRangeStart,
    isRangeEnd,
    isCurrentMonth,
    isCurrent,
    isDisabled,
    isWeekend,
    isHidden,
  })

  const onClick = () => {
    if (isDayType) {
      props.onClick?.(day)
    }
  }

  const onDayClick = () => {
    if (isDisabled || (!isCurrentMonth && hideNeighborMonths)) return
    onClick()
  }

  /**
   * Custom render
   */
  if (props.onDayRender) {
    return (
      <>
        {props.onDayRender({
          now,
          self: day,
          active: dtStart,
          isActive,
          isCurrent,
          isCurrentMonth,
          isDisabled,
          onClick,
        })}
      </>
    )
  }

  return (
    <Flexbox flex={1} justifyContent="center" alignItems="center">
      <Flexbox
        css={dayStyles}
        // inlineStyle={props.style}
        justifyContent="center"
        alignItems="center"
        onClick={onDayClick}
      >
        <Text capitalize size="s">
          {day.date()}
        </Text>
      </Flexbox>
    </Flexbox>
  )
}

export default DateGridDay
