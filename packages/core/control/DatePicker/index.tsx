/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import IMask from 'imask';
import React, { FC, forwardRef, RefObject, useLayoutEffect, useState, useRef } from 'react';
import Drop from '../../layout/Drop';
import Popover from '../../layout/Popover';
import TextField from '../TextField';
import DateGrid from './DateGrid';
import createStyles from './styles';
import DatePickerTypes from './types';
import Icon from '../../content/Icon';
import { DateTime } from 'luxon';
import { useDateFormat } from './utils';

const DatePicker: FC<DatePickerTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {

    const [value, setValue] = useState(DateTime.local());
    const [isActive, setActive] = useState(false);
    const styles = createStyles();
    const fieldRef = useRef<any>(null)

    const {
        locale = "ru",
        format = "yyyy-MM-dd"
    } = props;

    const minValue = props.minValue
        ? DateTime.fromJSDate(props.minValue)
        : DateTime.local().minus({ year: 500 })

    const maxValue = props.maxValue
        ? DateTime.fromJSDate(props.maxValue)
        : DateTime.local().plus({ year: 500 })

    useLayoutEffect(() => {
        if (props.value) {
            if (typeof props.value === "string") {
                setValue(DateTime.fromString(props.value, format));
            } else {
                setValue(DateTime.fromJSDate(props.value));
            }
        }
    }, []);

    function onChange(value: DateTime) {
        if (!value.isValid) {
            return;
        }
        const dateFormat = useDateFormat(value, locale)
        fieldRef.current!.value = dateFormat(format)
        
        setValue(value);

        if (props.onChange) {
            props.onChange(value.toJSDate(), dateFormat(format), value);
        }
    }

    return (
        <Drop
            align="bottom"
            justify="start"
            onClickOutside={(event) => {
                if (event.target !== fieldRef.current!) {
                    setActive(false)
                }
            }}
            target={(
                <TextField
                    ref={fieldRef}
                    label={props.label}
                    defaultValue={useDateFormat(value, locale)(format)}
                    //@ts-ignore
                    // masked={props.masked && {
                    //     mask: DateTime,
                    //     pattern: format,
                    //     lazy: false,
                    //     min: minValue.toJSDate(),
                    //     max: maxValue.toJSDate(),
                    //     format: function (date) {
                    //         return DateTime.fromJSDate(date).toFormat(format)
                    //     },
                    //     parse: function (str) {
                    //         return DateTime.fromString(str, format)
                    //     },
                    //     blocks: {
                    //         yyyy: {
                    //             mask: IMask.MaskedRange,  from: 1, to: 3000
                    //         },
                    //         yy: {
                    //             mask: IMask.MaskedRange,  from: 0, to: 99
                    //         },
                    //         MM: {
                    //             mask: IMask.MaskedRange, from: 1, to: 12
                    //         },
                    //         dd: {
                    //             mask: IMask.MaskedRange, from: 0, to: 31
                    //         },
                    //         HH: {
                    //             mask: IMask.MaskedRange, from: 0, to: 23
                    //         },
                    //         mm: {
                    //             mask: IMask.MaskedRange, from: 0, to: 59
                    //         },
                    //         ss: {
                    //             mask: IMask.MaskedRange, from: 0, to: 59
                    //         }
                    //     }
                    // }}
                    onChange={(e) => {
                        const date = DateTime.fromString(e.target.value, format)
                        if (date.isValid && date > minValue && date < maxValue) {
                            setValue(date);
                        }
                    }}
                    onClick={() => {
                        setActive(true)
                    }}
                    rightChild={(
                        <Icon type={t => t.outline.calendar}/>
                    )}
                />
            )}
            children={(
                <Popover css={styles.drop(isActive)}>
                    <DateGrid
                        date={value}
                        minValue={minValue}
                        maxValue={maxValue}
                        onChange={onChange}
                        styles={styles}
                        locale={locale}
                    />
                </Popover>
            )}
        />
    )
};

export default forwardRef(DatePicker);