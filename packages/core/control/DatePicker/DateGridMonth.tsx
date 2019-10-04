/**
 * DateGridMonth.tsx
 * author: I.Trikoz
 */
import React from 'react';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';
import { DateTime } from 'luxon';
import { useDateFormat } from './utils';
import createStyles from './styles';

const DateGridMonth = (props: DatePickerTypes.DateGridMonthProps) => {
    const { locale, onClick, minValue, maxValue } = props;

    const day = useDateFormat(props.month, locale);
    const active = useDateFormat(props.active, locale);
    const now = useDateFormat(DateTime.local(), locale)

    const isDisabled =
        (minValue && minValue.toMillis() > props.month.toMillis()) ||
        (maxValue && maxValue.toMillis() < props.month.toMillis()) ||
        false;

    const isActive = (day("yyyyMM") === active("yyyyMM"));
    const isCurrent = (day("yyyyMM") === active("yyyyMM"));
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
            children={props.month.toFormat("LLLL")}
        />

    )
};

export default DateGridMonth;