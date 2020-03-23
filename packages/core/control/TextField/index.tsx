import { jsx } from '@emotion/core'
import Field from '@flow-ui/core/misc/hocs/Field'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, useImperativeHandle, useRef } from 'react'
import styles from './styles'
import Types from './types'

type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}

const TextField: RefForwardingComponent<RefTypes, Types.Props> = (props, ref) => {

    const { 
        decoration = 'outline', 
        size = 'm', 
        shape = 'rounded', 
        tabIndex = 0, 
        multiline = false
    } = props
    
    const { cs, attributes, events, focus } = useComponent('TextField', { 
        props, 
        styles,
        styleProps: {
            container: ['flow','layout'], 
            field: ['color','border','padding']
        },
        focus: {
            applyDecoration: false,
            ignoreMouse: false
        }
    })

    const fieldRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    useImperativeHandle(ref, () => fieldRef && inputRef && {
        ...inputRef.current,
        ...fieldRef.current,
    })

    function onClear() {
        if (inputRef.current) {
            Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
                ?.set
                ?.call(inputRef.current, '')

            inputRef.current.dispatchEvent(
                new Event('input', { bubbles: true})
            )
        }
    }

    return (
        <Field
            {...props}
            ref={fieldRef}
            decoration={decoration}
            size={size}
            shape={shape}
            focus={focus}
            styles={cs}

            onClear={onClear}
            events={{
                ...events.all,
                onFocus: (e) => {
                    inputRef.current?.focus()
                    events.all.onFocus?.(e)
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
                    css: cs.input({ size, multiline }),

                    onChange: props.onChange,
                    defaultValue: props.defaultValue,
                    value: props.value,
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
                    cols: props.cols,
                    rows: props.rows,
                    wrap: props.wrap,
                    tabIndex: props.tabIndex,
                    onFocus: (e) => events.all.onFocus?.(e),
                    onBlur: (e) => events.all.onBlur?.(e),
                }
            )}
        />
    )
}

export default forwardRef(TextField)