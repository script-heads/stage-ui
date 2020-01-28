import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import useMask from '@flow-ui/core/misc/hooks/useMask'

import React, { forwardRef, RefForwardingComponent, useEffect, useImperativeHandle, useRef, useState } from 'react'
import Field from '../../misc/hocs/Field'
import styles from './styles'
import Types from './types'

type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}

const TextField: RefForwardingComponent<RefTypes, Types.Props> = (props, ref) => {

    const {decoration = 'outline', size = 'm', shape='rounded', tabIndex = 0, masked, label} = props
    const [isEmpty, setEmpty] = useState<boolean>(
        props.defaultValue === '' ||
        typeof props.defaultValue === 'undefined'
    )
    
    const { cs, attributes, events, focus } = useComponent('TextField', { 
        props, 
        styles,
        mouseFocus: true,
        focusDecoration: props.decoration !== 'none'
    })

    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xl')
    const isLabelOverlay = (label && isEmpty && !focus && !isLabelOutside) ? true : false
    const selfRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
    const mask = masked && useMask(inputRef, masked)

    useImperativeHandle(ref, () => selfRef && inputRef && {
        ...inputRef.current,
        ...selfRef.current,
    })

    useEffect(() => {
        if (typeof props.value != 'undefined') {
            if (mask) {
                mask.value = props.value.toString()
            } else if (inputRef.current) {
                inputRef.current.value = props.value.toString()
            }
            setEmpty(props.value === '')
        }
    }, [props.value])

    function onChange(event) {
        props.onChange && props.onChange(event)
        setEmpty(event.target.value === '')
    }

    return (
        <Field
            {...props}
            ref={selfRef}
            decoration={decoration}
            size={size}
            shape={shape}
            focus={focus}
            styles={cs}
            isLabelOutside={isLabelOutside}
            isLabelOverlay={isLabelOverlay}

            onClear={() => {
                if (inputRef.current) inputRef.current.value = ''
            }}
            events={{
                ...events.all,
                onFocus: (e) => {
                    inputRef.current?.focus()
                    attributes.onFocus(e)
                },
            }}
            attributes={{
                ...attributes,
                tabIndex,
            }}
            children={jsx(
                props.multiline ? 'textarea' : 'input',
                {
                    ref: inputRef,
                    onKeyUp: onChange,
                    css: cs.input({isLabelOverlay}),

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

                    tabIndex: props.tabIndex,
                    onFocus: (e) => props.onFocus && props.onFocus(e),
                    onBlur: (e) => props.onBlur && props.onBlur(e)
                }
            )}
        />
    )
}

export default forwardRef(TextField)