/**
 * DateGridMonth.tsx
 * author: I.Trikoz
 */
import moment from 'moment'
import React from 'react'
import Flexbox from '../../layout/Flexbox'
import DatePickerTypes from './types'

const DateGridMonth = (props: DatePickerTypes.DateGridCalendarProps) => {
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

    const css = props.styles.gridBlock(isActive, isCurrent, isDisabled, true)

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