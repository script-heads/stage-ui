/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import CheckTypes from './types'

const Check: ForwardRefRenderFunction<HTMLDivElement, CheckTypes.PrivateProps> = (props, ref) => {
    const [focus, setFocus] = useState(false)
    const [checked, setChecked] = useState(props.checked || props.defaultValue || false)
    const { label, styles, disabled,size, uppercase } = props

    useEffect(() => {
        if (typeof props.checked !== 'undefined') {
            setChecked(props.checked)
        }
    }, [props.checked])

    /**
     * Change handler
     */
    function onChange(event: React.FormEvent<HTMLInputElement>) {
        props.onChange && props.onChange(event)
        if (typeof props.checked === 'undefined') {
            setChecked(!checked)
        }
    }
    /*
    * Keyboard control
    */
    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        /**
         * Enter or Space
         */
        if (event.keyCode === 0x0D || event.keyCode === 0x20) {
            onChange(event)
            /**
             * Prevent page scrolling
             */
            if (event.keyCode === 0x20) {
                event.preventDefault()
            }
        }
        props.onKeyDown && props.onKeyDown(event)
    }

    function onClick(e: React.MouseEvent<HTMLInputElement>) {
        if (!props.disabled) {
            onChange(e)
        }
        props.onClick && props.onClick(e)
    }

    const containerProps = {
        ref,
        css: styles.container({disabled}),
        onClick,
        onKeyDown,
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
            setFocus(true)
            props.onFocus && props.onFocus(e)
        },
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            setFocus(false)
            props.onBlur && props.onBlur(e)
        }
    }
    
    return (
        <div {...containerProps}>
            {props.children(checked, focus)}
            {(label && label.length) && (
                <div css={styles.label({disabled,size,uppercase})} children={label} />
            )}
        </div>
    )
}

export default forwardRef(Check)