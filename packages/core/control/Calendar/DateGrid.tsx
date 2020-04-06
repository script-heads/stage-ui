import { Button, Divider, Flexbox, Grid } from '@stage-ui/core'
import moment, { Moment } from 'moment'
import React, { Fragment, useEffect, useState } from 'react'
import DateGridDay from './DateGridDay'
import DateGridMonth from './DateGridMonth'
import DateGridTitle from './DateGridTitle'
import DateGridYear from './DateGridYear'
import DatePickerTypes from './types'

let toDayWord = ''

const DateGrid = (props: DatePickerTypes.DateGridProps) => {

    const { value } = props
    const now = moment()

    if (!toDayWord) {
        for (const char of now.calendar()) {
            if (char === ' ' || char === ',') {
                break
            }
            toDayWord += char
        }
    }

    const [gridType, setGridType] = useState<'year' | 'month' | 'day'>(props.type)
    const [tmpDate, setTmpDate] = useState(value)

    const monthOffset = gridType === 'day' ? 1 : 9
    const grid: Moment[][] = []
    const start = tmpDate.clone().startOf('month').startOf('week').startOf('day')
    const end = tmpDate.clone().endOf('month').endOf('week').startOf('day')

    useEffect(() => {
        setGridType(props.type)
    }, [props.type])

    while (start.valueOf() < end.valueOf()) {
        grid.push(
            Array(7)
                .fill(null)
                .map(() =>
                    start.add(1, 'day').clone()
                )
        )
    }

    useEffect(() => setTmpDate(value), [value])

    return (
        <Flexbox {...props.attributes} column css={props.styles.dateGrid}>
            <DateGridTitle
                styles={props.styles}
                gridType={gridType}
                onGridTypeChange={setGridType}
                value={tmpDate}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onPrevious={() => {
                    const clone = tmpDate.clone()
                    if (gridType === 'day') {
                        clone.add(-1, 'month')
                    }
                    if (gridType === 'month') {
                        clone.add(-1, 'year')
                    }
                    if (gridType === 'year') {
                        clone.add(-monthOffset, 'year')
                    }
                    setTmpDate(clone)
                }}
                onNext={() => {
                    const clone = tmpDate.clone()
                    if (gridType === 'day') {
                        clone.add(1, 'month')
                    }
                    if (gridType === 'month') {
                        clone.add(1, 'year')
                    }
                    if (gridType === 'year') {
                        clone.add(monthOffset, 'year')
                    }
                    setTmpDate(clone)
                }}
            />
            {gridType === 'day' && (
                <Fragment>
                    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr">
                        {moment.weekdaysMin().map(day => (
                            <Flexbox
                                key={day}
                                flex={1}
                                css={props.styles.weekDay}
                                justifyContent="center"
                                alignItems="center"
                                children={day.slice(0, 2)}
                            />
                        ))}
                        {grid.map((week: Moment[]) =>
                            week.map((day: Moment) =>
                                <DateGridDay
                                    styles={props.styles}
                                    key={day.valueOf()}
                                    value={day}
                                    tmp={tmpDate}
                                    active={value}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        if (props.type === 'day') {
                                            props.onChange(day)
                                        }
                                    }}
                                />
                            )
                        )}
                    </Grid>
                    {!props.hideToday && (
                        <Divider m="0.5rem 0" />
                    )}
                    {!props.hideToday && (
                        <Flexbox justifyContent="center">
                            <Button
                                size="s"
                                decoration="plain"
                                onClick={() => {
                                    if (props.type === 'day') {
                                        props.onChange(now)
                                    }
                                }}
                                children={toDayWord}
                            />
                        </Flexbox>
                    )}
                </Fragment>
            )}
            {gridType === 'month' && (
                <Grid templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
                    {
                        Array(12).fill(null).map((_, index) => {
                            const clone = tmpDate.clone().month(index)
                            return (
                                <DateGridMonth
                                    styles={props.styles}
                                    key={index}
                                    value={clone}
                                    tmp={tmpDate}
                                    style={{ padding: '0 0.5rem' }}
                                    active={value}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        if (props.type === 'month') {
                                            props.onChange(clone)
                                        } else {
                                            setTmpDate(clone)
                                            setGridType('day')
                                        }
                                    }}
                                />
                            )
                        })
                    }
                </Grid>

            )}
            {gridType === 'year' && (
                <Grid key={1} templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
                    {
                        Array(monthOffset).fill(null).map((_, index) => {
                            const clone = tmpDate.clone().add(index - 4, 'year')
                            return (
                                <DateGridYear
                                    styles={props.styles}
                                    key={index}
                                    value={clone}
                                    tmp={tmpDate}
                                    style={{ padding: '0 1rem' }}
                                    active={value}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        if (props.type === 'year') {
                                            props.onChange(clone)
                                        } else {
                                            setTmpDate(clone)
                                            setGridType('month')
                                        }
                                    }}
                                />
                            )
                        })
                    }
                </Grid>
            )}
        </Flexbox>
    )
}

export default DateGrid
