/**
 * DateGrid.tsx
 * author: I.Trikoz
 */
import moment, { Moment } from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../control/Button';
import Flexbox from '../../layout/Flexbox';
import Grid from '../../layout/Grid';
import DateGridDay from './DateGridDay';
import DateGridMonth from './DateGridMonth';
import DateGridTitle from './DateGridTitle';
import DateGridYear from './DateGridYear';
import DatePickerTypes from './types';

let toDayWord = '';

const DateGrid = (props: DatePickerTypes.DateGridProps) => {
    
    const { value } = props;
    const now = moment();

    if (!toDayWord) {
        for(const char of now.calendar()) {
            if (char === ' ' || char === ',') {
                break
            }
            toDayWord += char
        }
    }

    const [gridType, setGridType] = useState<"year" | "month" | "day">("day");
    const [tmpDate, setTmpDate] = useState(value);

    const monthOffset = gridType === "day" ? 1 : 9;
    const grid: Moment[][] = [];
    const start = tmpDate.clone().startOf('month').startOf('week').startOf("day");
    const end = tmpDate.clone().endOf('month').endOf('week').startOf("day");

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
        <Flexbox column css={props.styles.dateGrind}>
            <DateGridTitle
                styles={props.styles}
                gridType={gridType}
                onGridTypeChange={setGridType}
                value={tmpDate}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onPrevious={() => {
                    const clone = tmpDate.clone();
                    if (gridType === "day") {
                        clone.add(-1, 'month')
                    }
                    if (gridType === "month") {
                        clone.add(-1, 'year')
                    }
                    if (gridType === "year") {
                        clone.add(-monthOffset, 'year')
                    }
                    setTmpDate(clone)
                }}
                onNext={() => {
                    const clone = tmpDate.clone();
                    if (gridType === "day") {
                        clone.add(1, 'month')
                    }
                    if (gridType === "month") {
                        clone.add(1, 'year')
                    }
                    if (gridType === "year") {
                        clone.add(monthOffset, 'year')
                    }
                    setTmpDate(clone)
                }}
            />
            {gridType === "day" && (
                <Fragment>
                    <Flexbox>
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
                    </Flexbox>
                    {grid.map((week: Moment[], index: number) =>
                        <Flexbox key={index}>
                            {week.map((day: Moment) => {
                                return (
                                    <DateGridDay
                                        styles={props.styles}
                                        key={day.valueOf()}
                                        value={day}
                                        active={value}
                                        minValue={props.minValue}
                                        maxValue={props.maxValue}
                                        onClick={() => {
                                            props.onChange(day);
                                        }}
                                    />
                                )
                            })}
                        </Flexbox>
                    )}
                    {!props.hideToday && (
                        <Button 
                            size="small"
                            decoration="outline"
                            mt="0.5rem"
                            w="100%"
                            onClick={() => {
                                props.onChange(now)
                            }}
                            children={toDayWord}
                        />
                    )}
                </Fragment>
            )}
            {gridType === "month" && (
                <Grid templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
                    {
                        Array(12).fill(null).map((_, index) => {
                            const clone = tmpDate.clone().month(index)
                            return (
                                <DateGridMonth
                                    styles={props.styles}
                                    key={index}
                                    value={clone}
                                    style={{ padding: "0 0.5rem"}}
                                    active={value}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        setGridType("day")
                                        props.onChange(clone);
                                    }}
                                />
                            )
                        })
                    }
                </Grid>

            )}
            {gridType === "year" && (
                <Grid key={1} templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
                    {
                        Array(monthOffset).fill(null).map((_, index) => {
                            const clone = tmpDate.clone().add(index - 4, 'year')
                            return (
                                <DateGridYear
                                    styles={props.styles}
                                    key={index}
                                    value={clone}
                                    style={{ padding: "0 1rem"}}
                                    active={value}
                                    minValue={props.minValue}
                                    maxValue={props.maxValue}
                                    onClick={() => {
                                        setGridType("month")
                                        props.onChange(clone);
                                    }}
                                />
                            )
                        })
                    }
                </Grid>
            )}
        </Flexbox>
    )
};

export default DateGrid
