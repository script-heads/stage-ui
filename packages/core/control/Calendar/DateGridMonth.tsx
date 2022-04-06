import React, { Fragment } from 'react'

import { Flexbox, Text } from '@stage-ui/core'
import moment from 'moment'

import CalendarTypes from './types'

const DateGridMonth = (props: CalendarTypes.DateGridMonthProps) => {
  const { value: self, active, onClick, minValue, maxValue } = props

  const isDisabled =
    minValue.valueOf() > self.valueOf() || maxValue.valueOf() < self.valueOf() || false

  const now = moment()
  const monthValue = self.clone().startOf('month').valueOf()
  const nowValue = now.clone().startOf('month').valueOf()
  const activeValue = active?.clone().startOf('month').valueOf()

  const isActive = activeValue === monthValue
  const isCurrent = monthValue === nowValue

  const css = props.classes.monthOrYear({ isActive, isCurrent, isDisabled })

  /**
   * Custom render
   */
  if (props.onMonthRender) {
    return (
      <>
        {props.onMonthRender({
          now,
          self,
          active,
          isActive,
          isCurrent,
          isDisabled,
          onClick,
        })}
      </>
    )
  }

  return (
    <Flexbox
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        if (!isDisabled && onClick) {
          onClick?.()
        }
      }}
      css={css}
      inlineStyle={props.style}
    >
      <Text capitalize size="s">
        {self.format('MMMM')}
      </Text>
    </Flexbox>
  )
}

export default DateGridMonth
