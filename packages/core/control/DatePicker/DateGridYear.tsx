/**
 * DateGridYear.tsx
 * author: I.Trikoz
 */
import React from 'react';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';
import { DateTime } from 'luxon';
import { useDateFormat } from './utils';
import createStyles from './styles';

const DateGridYear = (props: DatePickerTypes.DateGridYearProps) => {
    const { locale, onClick, minValue, maxValue } = props;

    const day = useDateFormat(props.year, locale);
    const active = useDateFormat(props.active, locale);
    const now = useDateFormat(DateTime.local(), locale)

    const isDisabled =
        (minValue && minValue.toMillis() > props.year.toMillis()) ||
        (maxValue && maxValue.toMillis() < props.year.toMillis()) ||
        false;

    const isActive = (day("yyyy") === active("yyyy"));
    const isCurrent = (day("yyyy") === active("yyyy"));

    const styles = createStyles();
    const css = styles.gridBlock(isActive, isCurrent, isDisabled, true);

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
            children={props.year.toFormat("yyyy")}
        />

    )
};

export default DateGridYear;