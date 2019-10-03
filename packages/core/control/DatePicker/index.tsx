/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import React, { useState, useLayoutEffect, forwardRef, FC, RefObject } from 'react';
import moment from 'moment';
import MonthGrid from './MonthGrid';
import DatePickerTypes from './types';
import createStyles from './styles';
import Field from '../../misc/hocs/Field';
import Button from '../Button';
import useContainer from '../../misc/hooks/useContainer';
import Icon from '../../content/Icon';
import TextField from '../TextField';
import Drop from '../../layout/Drop';
import Popover from '../../layout/Popover';

const DatePicker: FC<DatePickerTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {

    const [value, setValue] = useState(moment());
    const [isActive, setActive] = useState(false);
    const styles = createStyles(props);

    const {
        format = "YYYY-MM-DD"
    } = props;

    useLayoutEffect(() => {
        moment.locale("ru_RU");

        if (props.value) {
            setValue(moment(props.value, format));
        }
    }, []);

    function onChange(value: moment.Moment) {
        setValue(value);
        if (props.onChange) {
            props.onChange(value, value.format(format));
        }
    }

    return (
        <Drop
            align="bottom"
            justify="start"
            target={(
                <TextField
                    label={props.label}
                    value={value.format(format || "YYYY-MM-DD")}
                    onChange={(e) => {
                        const date = moment(e.target.value, format);
                        if (date.isValid()) {
                            setValue(date);
                        }
                    }}
                    onFocus={() => {
                        setActive(true)
                    }}
                    onBlur={() => {
                        setActive(false)
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

    return (
        <Field
            {...props}
            cursor='text'
            label={props.label}
            onClick={() => setActive(true)}
            rightChild={<Icon type={i => !isActive ? i.outline.calendar : undefined} />}
            children={(
                <div>
                    <input
                        onChange={e => {
                            let date = moment(e.currentTarget.value, format || "YYYY-MM-DD");
                            if (date.isValid()) {
                                setValue(date);
                            }
                        }}
                        value={value.format(format || "YYYY-MM-DD")}
                    />
                    {isActive && (
                        <div css={styles.textFieldWrapper}>
                            <MonthGrid
                                value={value}
                                minValue={props.minValue}
                                maxValue={props.maxValue}
                                onChange={onChange}
                                styles={styles}
                            />
                            <Button
                                onClick={() => setActive(false)}
                                size="small"
                                children="OK"
                                decoration="text"
                                css={styles.textFieldOkButton}
                            />
                        </div>
                    )}
                </div>
            )}
        />
    )
    // switch (props.type) {
    //     case 'display':
    //         return (
    //             <MonthGrid
    //                 value={value}
    //                 minValue={props.minValue}
    //                 maxValue={props.maxValue}
    //                 onChange={onChange}
    //                 styles={styles}
    //             />)
    //     case 'textfield':
    //     default:
    //         return (
    //             <div>


    //             </div>
    //         )
    // }
};

export default forwardRef(DatePicker);