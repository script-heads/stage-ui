/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Text } from '@stage-ui/core'
import moment from 'moment'
import { Fragment } from 'react'
import T from './types'

const DateGridDay = (props: T.DateGridDayProps) => {
    const { day, tmp, active, minValue, maxValue, type, hideNeighborMonths } = props

    const now = moment()

    const isDisabled =
        minValue.valueOf() > self.valueOf() ||
        maxValue.valueOf() < self.valueOf() ||
        false

    const dayValue = day.startOf('day').valueOf()
    const nowValue = now.startOf('day').valueOf()
    const activeValue = active.startOf('day').valueOf()

    const isActive = (activeValue === dayValue)
    const isCurrent = (dayValue === nowValue)
    const isCurrentMonth = (day.month() === tmp.month())
    const isHidden = !isCurrentMonth && hideNeighborMonths
    const isWeekend = [5, 6].indexOf(day.weekday()) != -1

    const isWeekType = type === 'week'
    const isDayType = type === 'day'

    const dayStyles = props.styles.day({
        isWeekType, isActive, isCurrent, isDisabled, isCurrentMonth, isWeekend, isHidden
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
            <Fragment>
                {props.onDayRender({
                    now, self: day, active, isActive, isCurrent, isCurrentMonth, isDisabled, onClick
                })}
            </Fragment>
        )
    }



    return (
        <Flexbox
            flex={1}
            justifyContent="center"
            alignItems="center"
        >
            <Flexbox
                css={dayStyles}
                style={props.style}
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