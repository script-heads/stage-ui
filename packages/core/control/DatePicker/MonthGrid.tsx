/**
 * MonthGrid.tsx
 * author: I.Trikoz
 */
import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import MonthGridTitle from './MonthGridTitle';
import MonthGridDay from './MonthGridDay';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';

const MonthGrid = (props: DatePickerTypes.MonthGridProps) => {

    const [date, setDate] = useState(props.value);
    const [activeDate, setActiveDate] = useState(moment());

    const grid: Moment[][] = [];
    const start = date.clone().startOf('month').startOf('week').subtract(1, 'day');
    const end = date.clone().endOf('month').endOf('week');

    while (start.isBefore(end, 'day')) {
        grid.push(
            Array(7).fill(null).map(() => start.add(1, 'day').clone())
        )
    }

    useEffect(() => setActiveDate(props.value), [props.value]);

    const styles = props.styles;

    return (
        <Flexbox column css={styles.monthGrid}>
            <MonthGridTitle
                date={date}
                onChange={setDate}
                disaplayWeeks={true}
                styles={styles}
            />
            {grid.map((week: Moment[], index: number) =>
                <Flexbox key={index}>
                    {week.map((day: Moment, index: number) => {
                        return (
                            <MonthGridDay
                                key={index}
                                day={day}
                                styles={styles}
                                active={activeDate}
                                minValue={props.minValue}
                                maxValue={props.maxValue}
                                onClick={() => {
                                    props.onChange(day.clone());
                                }}
                            />
                        )
                    })}
                </Flexbox>
            )}
        </Flexbox>
    )
};

export default MonthGrid
