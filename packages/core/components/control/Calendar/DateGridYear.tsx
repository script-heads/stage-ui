/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox } from '@stage-ui/core'
import moment from 'moment'
import { Fragment } from 'react'
import CalendarTypes from './types'

const DateGridYear = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value: self, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > self.valueOf() ||
        maxValue.valueOf() < self.valueOf() ||
        false

    const now = moment()
    const yearValue = self.clone().startOf('year').valueOf()
    const nowValue = now.clone().startOf('year').valueOf()
    const activeValue = active.clone().startOf('year').valueOf()

    const isActive = (activeValue === yearValue)
    const isCurrent = (yearValue === nowValue)

    const css = props.styles.day({ isActive, isCurrent, isDisabled, isCurrentMonth: true })

    /**
     * Custom render
     */
    if (props.onYearRender) {
        return (
            <Fragment
                children={
                    props.onYearRender({ now, self, active, isActive, isCurrent, isDisabled, onClick })
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
            children={self.format('YYYY')}
        />

    )
}

export default DateGridYear