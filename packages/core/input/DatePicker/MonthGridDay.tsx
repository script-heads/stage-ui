/**
 * MonthGridDay.tsx
 * author: I.Trikoz
 */
import React from 'react';
import moment from 'moment';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';

export default (props: DatePickerTypes.MonthGridDayProps) => {
    const { active, day, onClick, minValue, maxValue } = props;

    const isDisabled = (minValue && minValue > day) || (maxValue && maxValue < day) || false;
    const isActive = (day.format("YYYYMMDD") === active.format("YYYYMMDD"));
    const isCurrent = (day.format("YYYYMMDD") === moment().format("YYYYMMDD"));
    const isCurrentMonth = (day.format("MM") === moment().format("MM"));

    const styles = props.styles.day(isActive, isCurrent, isDisabled, isCurrentMonth);

    return (
        <Flexbox
            justifyContent="center"
            alignItems="center"
            onClick={() => {
                if (!isDisabled && onClick) {
                    onClick();
                }
            }}
            css={styles}
            children={day.date()}
        />

    )
};