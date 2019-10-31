import { jsx } from '@emotion/core'
import React, { FC, forwardRef, useState, useImperativeHandle, useRef, useEffect, useMemo } from 'react'
import textFieldStyles from './styles'
import Types from './types'
import Field from '../../misc/hocs/Field'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import useMask from '@flow-ui/core/misc/hooks/useMask'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'

const TextField: FC<Types.Props> = (props, ref) => {

    const {decoration = 'outline', size = 'medium', shape='rounded', tabIndex = 1, masked} = props
    const [isEmpty, setEmpty] = useState<boolean>(
        props.defaultValue === '' ||
        typeof props.defaultValue === 'undefined'
    )
    
    const {attributes, focus} = useContainer(props, true, props.decoration != 'none')
    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xlarge')
    const isLabelOverlay = (isEmpty && !focus && !isLabelOutside) ? true : false
    const styles = useStyles<Types.Styles>(props, textFieldStyles, 'TextField')
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
    const mask = masked && useMask(inputRef, masked)

    useImperativeHandle(ref, () => {
        return inputRef.current
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
            decoration={decoration}
            size={size}
            shape={shape}
            focus={focus}
            styles={styles}
            isLabelOutside={isLabelOutside}
            isLabelOverlay={isLabelOverlay}

            onClear={() => {
                if (inputRef.current) inputRef.current.value = ''
            }}

            attributes={{
                ...attributes,
                tabIndex,
                onFocus: (e) => {
                    inputRef.current?.focus()
                    attributes.onFocus(e)
                },
            }}
            children={jsx(
                props.multiline ? 'textarea' : 'input',
                {
                    ref: inputRef,
                    onKeyUp: onChange,
                    css: styles.input({isLabelOverlay}),

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