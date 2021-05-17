/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Text } from '@stage-ui/core'
import moment from 'moment'
import { Fragment } from 'react'
import T from './types'

const DateGridDay = (props: T.DateGridDayProps) => {
    const { value: self, tmp, active, onClick, minValue, maxValue, type } = props

    const now = moment()

    const isDisabled =
        minValue.valueOf() > self.valueOf() ||
        maxValue.valueOf() < self.valueOf() ||
        false

    const dayValue = self.startOf('day').valueOf()
    const nowValue = now.startOf('day').valueOf()
    const activeValue = active.startOf('day').valueOf()

    const isActive = (activeValue === dayValue)
    const isCurrent = (dayValue === nowValue)
    const isCurrentMonth = (self.month() === tmp.month())
    const isWeekend = [5, 6].indexOf(self.weekday()) != -1

    const css = props.styles.day({
        isActive, isCurrent, isDisabled, isCurrentMonth, isWeekend, isWeekType: type === 'week'
    })

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
            flex={1}
            onClick={() => {
                if (!isDisabled) onClick?.()
            }}
        >
            <Flexbox
                css={css}
                style={props.style}
                justifyContent="center"
                alignItems="center"
            >
                <Text capitalize size="s">
                    {self.date()}
                </Text>
            </Flexbox>
        </Flexbox>
    )
}

export default DateGridDay