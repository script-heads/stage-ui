import { jsx } from '@emotion/core';
import React, { FC, forwardRef, useState, useImperativeHandle, useRef, useEffect, useMemo } from 'react';
import getStyles from './styles';
import ButtonTypes from './types';
import Field from '../../misc/hocs/Field';
import IMask from 'imask';
import createID from '../../misc/utils/createID';

const elements: { [key: string]: IMask.InputMask<IMask.AnyMaskedOptions> } = {};

const TextField: FC<ButtonTypes.Props> = (props, ref) => {

    const [isEmpty, setEmpty] = useState<boolean>(true);
    const [underOverlay, setUnderOverlay] = useState<boolean>(false);
    const styles = getStyles(props);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const id = useMemo(() => createID(), []);

    useImperativeHandle(ref, () => {
        return inputRef.current
    });

    useEffect(() => {
        if (inputRef.current && props.masked) {
            elements[id] = IMask(
                inputRef.current,
                props.masked
            )
        }
    }, []);

    useEffect(() => {
        if (typeof props.value != 'undefined') {
            if (props.masked) {
                elements[id].value = props.value.toString()
            } else if (inputRef.current) {
                inputRef.current.value = props.value.toString()
            }
        }
    }, [props.value])

    function onChange(event) {
        setEmpty(event.target.value === '' ? true : false);
        props.onChange && props.onChange(event)
    }

    return (
        <Field
            {...props}
            value={typeof props.value === 'undefined' ? isEmpty && undefined : props.value}
            cursor='text'
            onLabelOverlay={(state) => setUnderOverlay(state)}
            onClick={(e) => {
                props.onClick && props.onClick(e)
                inputRef.current!.focus()
            }}
            onClear={() => inputRef.current!.value = ''}
            manyLines={props.multiline}
            overlayLabelAlign={props.multiline ? 'top' : 'bottom'}
            insideLabelStyles={props.multiline && props.decoration != 'underline' && styles.insideLabelStyles}
            children={jsx(
                props.multiline ? 'textarea' : 'input',
                {
                    ref: inputRef,
                    onKeyUp: onChange,
                    css: styles.input(underOverlay),

                    defaultValue: props.defaultValue,
                    disabled: props.disabled,
                    autoComplete: props.autoComplete,
                    autoFocus: props.autoFocus,
                    list: props.list,
                    name: props.name,
                    placeholder: props.placeholder,
                    pattern: props.pattern,
                    readOnly: props.readOnly,
                    required: props.required,
                    type: props.type,

                    form: props.form,
                    formAction: props.formAction,
                    formEncType: props.formEncType,
                    formMethod: props.formMethod,
                    formNoValidate: props.formNoValidate,
                    formTarget: props.formTarget,

                    max: props.max,
                    maxLength: props.maxLength,
                    min: props.min,
                    minLength: props.minLength,
                    step: props.step,
                    width: props.width,
                    cols: props.cols,
                    rows: props.rows,
                    wrap: props.wrap,
                }
            )}
        />
    )
}

export default forwardRef(TextField);