/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import React, { useState, useLayoutEffect } from 'react';
import moment from 'moment';
import MonthGrid from './MonthGrid';
import DatePickerTypes from './types';
import createStyles from './styles';
import Field from '../../misc/hocs/Field';
import Button from '../../action/Button';
import useContainer from '../../misc/hooks/useContainer';
import Icon from '../../content/Icon';

export default (props: DatePickerTypes.Props) => {

    const [value, setValue] = useState(moment());
    const [isActive, setActive] = useState(false);
    const styles = createStyles(props);

    useLayoutEffect(() => {
        moment.locale("ru_RU");

        if (props.value) {
            if (props.format) {
                setValue(moment(props.value, props.format));
            } else {
                if (moment.isMoment(props.value)) {
                    setValue(props.value);
                } else {
                    console.warn('DatePicker property value should be instanceof Moment, otherwise you should use format property.');
                }
            }
        }
    }, []);

    function onChange(value: moment.Moment) {
        setValue(value);

        if (props.onChange) {
            if (props.format) {
                props.onChange(value.format(props.format));
            } else {
                props.onChange(value);
            }
        }
    }

    switch (props.type) {
        case 'display':
            return (
                <MonthGrid
                    value={value}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    onChange={onChange}
                    styles={styles}
                />)
        case 'textfield':
        default:
            return (
                <div>
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
                                        let date = moment(e.currentTarget.value, props.format || "YYYY-MM-DD");
                                        if (date.isValid()) {
                                            setValue(date);
                                        }
                                    }}
                                    value={value.format(props.format || "YYYY-MM-DD")}
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

                </div>
            )
    }
};