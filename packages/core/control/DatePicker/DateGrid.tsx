/**
 * DateGrid.tsx
 * author: I.Trikoz
 */
import React, { useState, useEffect, Fragment } from 'react';
import DateGridTitle from './DateGridTitle';
import DateGridDay from './DateGridDay';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';
import { DateTime, Info } from 'luxon';
import DateGridMonth from './DateGridMonth';
import Block from '../../layout/Block';
import DateGridYear from './DateGridYear';
import Grid from '../../layout/Grid';
import createStyles from './styles';

const DateGrid = (props: DatePickerTypes.DateGridProps) => {

    const { date, locale } = props;

    const [gridType, setGridType] = useState<"year" | "month" | "day">("day");
    const [tmpDate, setTmpDate] = useState(date);

    const grid: DateTime[][] = [];
    
    let start = tmpDate.startOf('month').startOf('week').startOf("day");
    const end = tmpDate.endOf('month').endOf('week').startOf("day");

    while (start < end) {
        grid.push(
            Array(7).fill(null).map(() => {
                start = start.plus({ day: 1})
                return start
            })
        )
    }

    useEffect(() => {
        setTmpDate(date)
    }, [date])

    const styles = createStyles();
    
    const monthOffset = gridType === "day" ? 1 : 9;

    return (
        <Flexbox column css={styles.dateGrind}>
            <DateGridTitle
                gridType={gridType}
                onGridTypeChange={setGridType}
                locale={props.locale}
                date={tmpDate}
                onPrevious={() => {
                    setTmpDate(
                        tmpDate.minus({ 
                            month: gridType === "day" ? 1 : 0,
                            year: gridType !== "day" ? monthOffset : 0
                        })
                    )
                }}
                onNext={() => {
                    setTmpDate(
                        tmpDate.plus({ 
                            month: gridType === "day" ? 1 : 0,
                            year: gridType !== "day" ? monthOffset : 0
                        })
                    )
                }}
            />
            {gridType === "day" && (
                <Fragment>
                    <Flexbox>
                        {Info.weekdays("short", { locale }).map(day => (
                            <Flexbox
                                key={day}
                                flex={1}
                                css={styles.weekDay}
                                justifyContent="center"
                                alignItems="center"
                                children={day.slice(0, 2)}
                            />
                        ))}
                    </Flexbox>
                    {grid.map((week: DateTime[], index: number) =>
                        <Flexbox key={index}>
                            {week.map((day: DateTime, index: number) => {
                                return (
                                    <DateGridDay
                                        locale={locale}
                                        key={index}
                                        day={day}
                                        active={date}
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
                </Fragment>
            )}
            {gridType === "month" && (
                <Block css={{ 
                    display:"grid",
                    gridTemplateRows: "1fr 1fr 1fr",
                    gridTemplateColumns: "1fr 1fr 1fr",

                }}>
                    {
                        Array(12).fill(null).map((_, index) => (
                            <DateGridMonth
                                locale={locale}
                                key={index}
                                month={tmpDate.set({month: index + 1})}
                                style={{ padding: "0 0.5rem"}}
                                active={date}
                                minValue={props.minValue}
                                maxValue={props.maxValue}
                                onClick={() => {
                                    setGridType("day")
                                    props.onChange(
                                        tmpDate.set({month: index + 1})
                                    );
                                }}
                            />
                        ))
                    }
                </Block>

            )}
            {gridType === "year" && (
                <Block css={{ 
                    display:"grid",
                    gridTemplateRows: "1fr 1fr 1fr",
                    gridTemplateColumns: "1fr 1fr 1fr",

                }}>
                    {
                        Array(monthOffset).fill(null).map((_, index) => (
                            <DateGridYear
                                locale={locale}
                                key={index}
                                year={tmpDate.set({year: tmpDate.year - 4 + index})}
                                style={{ padding: "0 1rem"}}
                                active={date}
                                minValue={props.minValue}
                                maxValue={props.maxValue}
                                onClick={() => {
                                    setGridType("month")
                                    props.onChange(
                                        tmpDate.set({year: tmpDate.year - 4 + index })
                                    );
                                }}
                            />
                        ))
                    }
                </Block>
            )}
        </Flexbox>
    )
};

export default DateGrid
