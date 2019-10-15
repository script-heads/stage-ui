/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import moment, { Moment } from 'moment';
import React, { FC, forwardRef, RefObject, useLayoutEffect, useRef, useState, Fragment } from 'react';
import Icon from '../../content/Icon';
import Drop from '../../layout/Drop';
import Popover from '../../layout/Popover';
import TextField from '../TextField';
import DateGrid from './DateGrid';
import createStyles from './styles';
import DatePickerTypes from './types';
import mask from './mask';
import FieldTypes from '../../misc/hocs/Field/types';

const DatePicker: FC<DatePickerTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {

    const {
        locale = "ru",
        format = "YYYY-MM-DD"
    } = props;

    moment.locale(locale)

    const now = moment()
    const [value, setValue] = useState(now);
    const [isActive, setActive] = useState(false);
    
    const styles = createStyles();
    
    const fieldRef = useRef<any>(null)
    
    const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
    const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')

    useLayoutEffect(() => {
        if (props.value) {
            if (typeof props.value === "string") {
                setValue(moment(props.value, format));
            } else {
                setValue(moment(props.value));
            }
        }
    }, []);

    function onChange(value: Moment) {
        if (!value.isValid) {
            return;
        }
        fieldRef.current!.value = value.format(format)
        
        setValue(value);

        if (props.onChange) {
            props.onChange(value, value.format(format));
        }
        if (!props.stayOpen) {
            setActive(false);
        }
    }

    return (
        <Fragment>
            <TextField
                {...(props as FieldTypes.Props)}
                type="text"
                ref={fieldRef}
                defaultValue={value.format(format)}
                masked={props.masked && mask(format, minValue, maxValue)}
                onChange={(e) => {
                    const date = moment(e.target.value, format)
                    if (date.isValid() && date > minValue && date < maxValue) {
                        setValue(date);
                    }
                }}
                onClick={() => {
                    if (!props.disabled) {
                        setActive(true)
                    }
                }}
                onFocus={() => {
                    if (!props.disabled) {
                        setActive(true)
                    }
                }}
                rightChild={props.rightChild || (
                    <Icon type={t => t.outline.calendar}/>
                )}
            />
            <Drop
                distance={9}
                align="bottom"
                justify="start"
                onClickOutside={(event) => {
                    if (event.target !== fieldRef.current!) {
                        setActive(false)
                    }
                }}
                target={fieldRef}
            >
                <Popover css={styles.drop(isActive)}>
                    <DateGrid
                        styles={styles}
                        value={value}
                        minValue={minValue}
                        maxValue={maxValue}
                        onChange={onChange}
                        hideToday={props.hideToday || false}
                        type={props.type || 'day'}
                    />
                </Popover>
            </Drop>
        </Fragment>
        
    )
};

export default forwardRef(DatePicker);