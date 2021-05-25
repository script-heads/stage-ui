/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox } from '@stage-ui/core'
import moment from 'moment'
import { Fragment } from 'react'
import CalendarTypes from './types'

const DateGridDay = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value: self, tmp, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > self.valueOf() ||
        maxValue.valueOf() < self.valueOf() ||
        false

    const now = moment()
    const dayValue = self.startOf('day').valueOf()
    const nowValue = now.startOf('day').valueOf()
    const activeValue = active.startOf('day').valueOf()

    const isActive = (activeValue === dayValue)
    const isCurrent = (dayValue === nowValue)
    const isCurrentMonth = (self.month() === tmp.month())
    const css = props.styles.day({isActive, isCurrent, isDisabled, isCurrentMonth})

    /**
     * Custom render
     */
    if (props.onDayRender) {
        return (
            <Fragment
                children={
                    props.onDayRender({ now, self, active, isActive, isCurrent, isCurrentMonth, isDisabled, onClick })
                }
            />
        )
    }

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
            children={self.date()}
        />
    )
}

export default DateGridDay