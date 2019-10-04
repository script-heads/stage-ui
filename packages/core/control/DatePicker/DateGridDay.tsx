/**
 * DateGridDay.tsx
 * author: I.Trikoz
 */
import React from 'react';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';
import { DateTime } from 'luxon';
import { useDateFormat } from './utils';
import createStyles from './styles';

const DateGridDay = (props: DatePickerTypes.DateGridDayProps) => {
    const { locale, onClick, minValue, maxValue } = props;

    const day = useDateFormat(props.day, locale);
    const active = useDateFormat(props.active, locale);
    const now = useDateFormat(DateTime.local(), locale)

    const isDisabled =
        (minValue && minValue.toMillis() > props.day.toMillis()) ||
        (maxValue && maxValue.toMillis() < props.day.toMillis()) ||
        false;

    const isActive = (day("yyyyMMdd") === active("yyyyMMdd"));
    const isCurrent = (day("yyyyMMdd") === active("yyyyMMdd"));
    const isCurrentMonth = (day("MM") === now("MM"));

    const styles = createStyles();
    const css = styles.gridBlock(isActive, isCurrent, isDisabled, isCurrentMonth);

    return (
        <Flexbox
            justifyContent="center"
            alignItems="center"
            onClick={() => {
                if (!isDisabled && onClick) {
                    onClick();
                }
            }}
            css={css}
            style={props.style}
            children={props.day.day}
        />

    )
};

export default DateGridDay;