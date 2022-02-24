import { Flexbox } from '@stage-ui/core'
import moment from 'moment'
import React from 'react'
import DateGridDay from './DateGridDay'
import T from './types'

const DateGridWeek = (props: T.DateGridWeekProps) => {
  const { week, ...rest } = props

  const now = moment().startOf('day').valueOf()
  const activeDay = props.active[0]?.clone().startOf('day').valueOf()

  const isCurrent = !!week.find((day) => day.clone().startOf('day').valueOf() === now)
  const isActive = !!week.find((day) => day.clone().startOf('day').valueOf() === activeDay)
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
