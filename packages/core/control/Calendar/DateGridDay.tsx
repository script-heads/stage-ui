import { Flexbox } from '@flow-ui/core'
import moment from 'moment'
import React from 'react'
import CalendarTypes from './types'

const DateGridDay = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value, tmp, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > value.valueOf() ||
        maxValue.valueOf() < value.valueOf() ||
        false

    const now = moment()
    const dayValue = value.startOf('day').valueOf()
    const nowValue = now.startOf('day').valueOf()
    const activeValue = active.startOf('day').valueOf()

    const isActive = (activeValue === dayValue)
    const isCurrent = (dayValue === nowValue)
    const isCurrentMonth = (value.month() === tmp.month())
    const css = props.styles.gridBlock({isActive, isCurrent, isDisabled, isCurrentMonth})

    return (
        <Flexbox
            justifyContent="center"
            alignItems="center"
            onClick={() => {
                if (!isDisabled && onClick) {
                    onClick()
                }
            }}
            css={css}
            style={props.style}
            children={value.date()}
        />
    )
}

export default DateGridDay