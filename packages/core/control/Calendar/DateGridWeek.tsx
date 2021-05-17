/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox } from '@stage-ui/core'
import moment from 'moment'
import DateGridDay from './DateGridDay'
import T from './types'

const DateGridWeek = (props: T.DateGridWeekProps) => {
    const { week, active, type } = props

    const now = moment().startOf('day').valueOf()
    const activeDay = active.clone().startOf('day').valueOf()

    const isCurrent = !!week.find(day => day.clone().startOf('day').valueOf() === now)
    const isActive = !!week.find(day => day.clone().startOf('day').valueOf() === activeDay)

    const weekStyles = props.styles.week({
        isWeekType: type === 'week',
        isCurrent,
        isActive,
    })

    return (
        <Flexbox css={weekStyles}>
            {week.map(day => (
                <DateGridDay
                    key={day.valueOf()}
                    styles={props.styles}
                    value={day}
                    tmp={props.tmp}
                    active={props.active}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    onClick={() => {
                        props.onClick(props.type === 'week' ? week[0] : day)
                    }}
                    type={props.type}
                    onDayRender={props.onDayRender}
                />
            ))}
        </Flexbox>
    )
}

export default DateGridWeek