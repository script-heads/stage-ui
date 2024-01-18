import React from 'react'

import { Flexbox } from '@stage-ui/core'

import dayjs from 'dayjs'

import DateGridDay from './DateGridDay'
import T from './types'

const DateGridWeek = (props: T.DateGridWeekProps) => {
  const { week, ...rest } = props

  const now = dayjs().startOf('day').valueOf()
  const activeDay = props.active[0]?.startOf('day').valueOf()

  const isCurrent = !!week.find((day) => day.startOf('day').valueOf() === now)
  const isActive = !!week.find((day) => day.startOf('day').valueOf() === activeDay)
  const isWeekType = props.type === 'week'

  const weekStyles = props.classes.week({ isWeekType, isCurrent, isActive })

  const onWeekClick = () => {
    if (isWeekType) {
      props.onClick(week[0])
    }
  }

  return (
    <Flexbox css={weekStyles} onClick={onWeekClick}>
      {week.map((day) => (
        <DateGridDay key={day.valueOf()} day={day} {...rest} />
      ))}
    </Flexbox>
  )
}

export default DateGridWeek
