import React, { forwardRef, RefForwardingComponent, useEffect, useState } from 'react'
import CheckTypes from './types'

const Check: RefForwardingComponent<HTMLDivElement, CheckTypes.PrivateProps> = (props, ref) => {
    const [focus, setFocus] = useState(false)
    const [checked, setChecked] = useState(props.checked || props.defaultValue || false)
    const { label, styles, animated, disabled,size, uppercase } = props

    useEffect(() => {
        if (typeof props.checked !== 'undefined') {
            setChecked(props.checked)
        }
    }, [props.checked])

    /**
     * Change handler
     */
    function change() {
        props.onChange && props.onChange(!checked)
        if (typeof props.checked === 'undefined') {
            setChecked(!checked)
        }
    }
    /*
    * Keyboard control
    */
    function onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        /**
         * Enter or Space
         */
        if (event.keyCode === 0x0D || event.keyCode === 0x20) {
            change()
            /**
             * Prevent page scrolling
             */
            if (event.keyCode === 0x20) {
                event.preventDefault()
            }
        }
        props.onKeyDown && props.onKeyDown(event)
    }

    function onClick(e: React.MouseEvent<HTMLElement>) {
        if (!props.disabled) {
            change()
        }
        props.onClick && props.onClick(e)
    }

    const containerProps = {
        ref,
        css: styles.container({animated, disabled}),
        onClick,
        onKeyDown,
        onFocus: (e: React.FocusEvent<HTMLElement>) => {
            setFocus(true)
            props.onFocus && props.onFocus(e)
        },
        onBlur: (e: React.FocusEvent<HTMLElement>) => {
            setFocus(false)
            props.onBlur && props.onBlur(e)
        }
    }
    return (
        <div {...containerProps}>
            {props.children(checked, focus)}
            {(label && label.length) && (
                <div css={styles.label({animated,disabled,size,uppercase})} children={label} />
            )}
        </div>
    )
}

export default forwardRef(Check)