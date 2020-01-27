import moment from 'moment'
import React from 'react'
import Flexbox from '../../layout/Flexbox'
import CalendarTypes from './types'

const DateGridYear = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > value.valueOf() ||
        maxValue.valueOf() < value.valueOf() ||
        false

    const now = moment()
    const yearValue = value.clone().startOf('year').valueOf()
    const nowValue = now.clone().startOf('year').valueOf()
    const activeValue = active.clone().startOf('year').valueOf()

    const isActive = (activeValue === yearValue)
    const isCurrent = (yearValue === nowValue)

    const css = props.styles.gridBlock({isActive, isCurrent, isDisabled, isCurrentMonth: true})

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
            children={value.format('YYYY')}
        />

    )
}

export default DateGridYear