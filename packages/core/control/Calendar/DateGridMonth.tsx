import { Flexbox } from '@flow-ui/core'
import moment from 'moment'
import React from 'react'
import CalendarTypes from './types'

const DateGridMonth = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > value.valueOf() ||
        maxValue.valueOf() < value.valueOf() ||
        false

    const now = moment()
    const monthValue = value.clone().startOf('month').valueOf()
    const nowValue = now.clone().startOf('month').valueOf()
    const activeValue = active.clone().startOf('month').valueOf()

    const isActive = (activeValue === monthValue)
    const isCurrent = (monthValue === nowValue)

    const css = props.styles.day({isActive, isCurrent, isDisabled, isCurrentMonth: true})

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
            children={value.format('MMMM')}
        />

    )
}

export default DateGridMonth