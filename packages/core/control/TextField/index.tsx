/** @jsx jsx */
import { jsx } from '@emotion/react'
import Field from '@stage-ui/core/misc/hocs/Field'
import { useComponent, useTheme } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './styles'
import Types from './types'

const TextField: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {

    const {
        decoration = 'outline',
        size = 'm',
        shape = 'rounded',
        tabIndex = 0,
        multiline = false,
        disabled = false,
        leftChildNumber,
    } = props

    const { cs, attributes, events, focus } = useComponent('TextField', {
        props,
        styles,
        styleProps: {
            container: ['flow', 'layout'],
            field: ['color', 'border', 'padding']
        },
        focus: {
            applyDecoration: false,
            ignoreMouse: false
        }
    })

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)


    function onClear() {
        if (inputRef.current) {
            Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
                ?.set
                ?.call(inputRef.current, '')

            inputRef.current.dispatchEvent(
                new Event('input', { bubbles: true })
            )
        }
    }

    const leftCountLineRef = useRef<HTMLDivElement>(null)
    const [leftCountLineState, setleftCountLineState] = useState({
        count: 0,
        top: '0px'
    })

    useEffect(() => {
        if (leftChildNumber) {
            const value = (props.defaultValue || props.value || '').toString()
            setleftCountLineState({
                count: value.split(`\n`).length,
                top: leftCountLineState.top,
            })
        }
    }, [])

    const fieldRef = useRef<HTMLDivElement>(null)

    /**
     * Handle refs
     */
    useImperativeHandle(ref, () => ({
        clear: () => onClear(),
        container: fieldRef.current,
        input: inputRef.current
    }))

    const LeftCountLine = () => {
        if (!leftChildNumber) {
            return null
        }
        const arr = new Array(leftCountLineState.count).fill('')
        const render = typeof leftChildNumber === 'function'
            ? leftChildNumber
            : (index: number) => index+1

        return (
            <React.Fragment>
                <div ref={leftCountLineRef} style={{ top: leftCountLineState.top }} css={cs.lineNumbers}>
                    {arr.map((_, index) => (
                        <div key={index}>{render(index)}</div>
                        ))}
                </div>
                <div style={{visibility: 'hidden'}}>{render(arr.length-1)}</div>
            </React.Fragment>
        )
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
            clearable={(
                props.value !== undefined && !props.value
                    ? false
                    : props.clearable
            )}
            leftChild={(leftChildNumber && multiline) ? <LeftCountLine /> : props.leftChild}
            onClear={onClear}
            onEsc={(e) => {
                if (props.clearable) {
                    onClear()
                }
                props.onEsc?.(e)
            }}
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
                    css: cs.input({ size, multiline, disabled }),
                    onChange: (e) => {
                        if (leftCountLineRef.current) {
                            setleftCountLineState({
                                count: e.target.value.split(`\n`).length,
                                top: leftCountLineState.top,
                            })
                        }
                    },
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
                    onScroll: (e) => {
                        if (leftCountLineRef.current) {
                            setleftCountLineState({
                                count: e.target.value.split(`\n`).length,
                                top: -e.target.scrollTop + 'px'
                            })
                        }
                    },
                }
            )}
        />
    )
}

export default forwardRef(TextField)