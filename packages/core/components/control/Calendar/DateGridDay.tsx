import { Flexbox, Text } from '@stage-ui/core'
import moment from 'moment'
import React from 'react'
import T from './types'

const DateGridDay = (props: T.DateGridDayProps) => {
  const { day, tmp, active, minValue, maxValue, type, hideNeighborMonths } = props

  const now = moment()

  const isDisabled =
    minValue.valueOf() > moment(day).valueOf() ||
    maxValue.valueOf() < moment(day).valueOf() ||
    false

  const dayValue = day.startOf('day').valueOf()
  const nowValue = now.startOf('day').valueOf()
  const activeValue = active.startOf('day').valueOf()

  const isActive = activeValue === dayValue
  const isCurrent = dayValue === nowValue
  const isCurrentMonth = day.month() === tmp.month()
  const isHidden = !isCurrentMonth && hideNeighborMonths
  const isWeekend = [5, 6].indexOf(day.weekday()) !== -1

  const isWeekType = type === 'week'
  const isDayType = type === 'day'

  const dayStyles = props.classes.day({
    isWeekType,
    isActive,
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
          active,
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
