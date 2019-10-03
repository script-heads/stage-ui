/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import IMask from 'imask';
import moment from 'moment';
import React, { FC, forwardRef, RefObject, useLayoutEffect, useState, useRef } from 'react';
import Drop from '../../layout/Drop';
import Popover from '../../layout/Popover';
import TextField from '../TextField';
import MonthGrid from './MonthGrid';
import createStyles from './styles';
import DatePickerTypes from './types';

const DatePicker: FC<DatePickerTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {

    const [value, setValue] = useState(moment());
    const [isActive, setActive] = useState(false);
    const styles = createStyles(props);
    const fieldRef = useRef<any>(null)

    const {
        format = "YYYY-MM-DD"
    } = props;

    useLayoutEffect(() => {
        moment.locale("ru_RU");

        if (props.value) {
            if (moment.isMoment(props.value)) {
                setValue(props.value);
            } else {
                setValue(moment(props.value, format));
            }
        }
    }, []);

    function onChange(value: moment.Moment) {
        if (!value.isValid()) {
            return;
        }
        
        fieldRef.current!.value = value.format(format)
        
        setValue(value);
        if (props.onChange) {
            props.onChange(value, value.format(format));
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
                    defaultValue={value.format(format || "YYYY-MM-DD")}
                    //@ts-ignore
                    masked={props.masked && {
                        mask: Date,
                        pattern: format,
                        lazy: false,
                        min: new Date(1970, 0, 1),
                        max: new Date(2030, 0, 1),

                        format: function (date) {
                            return moment(date).format(format);
                        },
                        parse: function (str) {
                            return moment(str, format);
                        },

                        blocks: {
                            YYYY: {
                                mask: IMask.MaskedRange,
                                from: 1970,
                                to: 2030
                            },
                            MM: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 12
                            },
                            DD: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 31
                            },
                            HH: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 23
                            },
                            mm: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 59
                            }
                        }
                    }}
                    onChange={(e) => {
                        const date = moment(e.target.value, format);
                        if (date.isValid()) {
                            setValue(date);
                        }
                    }}
                    onClick={() => {
                        setActive(true)
                    }}
                />
            )}
            children={(
                <Popover css={styles.drop(isActive)}>
                    <MonthGrid
                        value={value}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        onChange={onChange}
                        styles={styles}
                    />
                </Popover>
            )}
        />
    )
};

export default forwardRef(DatePicker);