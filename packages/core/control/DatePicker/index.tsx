import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import moment, { Moment } from 'moment'
import React, { forwardRef, Fragment, RefForwardingComponent, useLayoutEffect, useRef, useState } from 'react'
import Icon from '../../content/Icon'
import Drop from '../../layout/Drop'
import Popover from '../../layout/Popover'
import Field from '../../misc/hocs/Field'
import useMask from '../../misc/hooks/useMask'
import maskConf from './mask'
import styles from './styles'
import Types from './types'
import { Calendar } from '../..'
const DatePicker: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const {
        locale = 'ru',
        format = 'YYYY-MM-DD',
        defaultValue,
        decoration = 'outline', 
        size = 'm', 
        shape='rounded', 
        tabIndex = 0,
        label 
    } = props

    moment.locale(locale)

    const now = moment()
    const [value, setValue] = useState(now)
    const [isActive, setActive] = useState(false)
    //TODO: setEmpty
    const [isEmpty, setEmpty] = useState<boolean>(
        defaultValue === '' ||
        defaultValue === 'undefined'
    )
    
    const { cs, attributes, events, focus } = useComponent('DatePicker', { 
        props, 
        styles,  
        mouseFocus: true,
        focusDecoration: props.decoration !== 'none'
    })

    const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
    const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')
    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xl')
    const isLabelOverlay = (label && isEmpty && !focus && !isLabelOutside) ? true : false
    const inputRef = useRef<HTMLInputElement>(null)
    const mask = props.masked && useMask(inputRef, maskConf(format, minValue, maxValue))

    useLayoutEffect(() => {
        if (props.value) {
            if (typeof props.value === 'string') {
                onChange(moment(props.value, format))
            } else {
                onChange(moment(props.value))
            }
        }
    }, [props.value])

    function onChange(value: Moment) {
        if (!value.isValid) {
            return
        }

        if (mask) {
            mask.value = value.format(format)
        } else if (inputRef.current) {
            inputRef.current.value = value.format(format)
        }
        
        setValue(value)
        
        if (props.onChange) {
            props.onChange(value, value.format(format))
        }
        if (!props.stayOpen) {
            setActive(false)
        }
    }

    return (
        <Fragment>
            <Field
                {...props}
                ref={ref}
                decoration={decoration}
                size={size}
                shape={shape}
                focus={focus}
                styles={cs}
                isLabelOutside={isLabelOutside}
                isLabelOverlay={isLabelOverlay}
                events={{
                    ...events.all,
                    onFocus: (e) => {
                        inputRef.current?.focus()
                        attributes.onFocus(e)
                        if (!props.disabled) {
                            setActive(true)
                        }
                    },
                    onClick:() => {
                        if (!props.disabled) {
                            setActive(true)
                        }
                    }
                }}
                attributes={{
                    ...attributes,
                    tabIndex,
                }}
                rightChild={props.rightChild || (
                    <Icon type={t => t.outline.calendar}/>
                )}
                children={jsx(
                    'input',
                    {
                        ref: inputRef,
                        onKeyUp: (e) => {
                            const date = moment(e.target.value, format)
                            if (date.isValid() && date > minValue && date < maxValue) {
                                setValue(date)
                            }
                        },
                        css: cs.input({isLabelOverlay}),
                        
                        defaultValue: defaultValue
                            ? moment(defaultValue, format)
                            : moment().format(format),
                        disabled: props.disabled,
                        autoComplete: props.autoComplete,
                        autoFocus: props.autoFocus,
                        list: props.list,
                        name: props.name,
                        placeholder: props.placeholder,
                        pattern: props.pattern,
                        readOnly: props.readOnly,
                        required: props.required,
                        // type: props.type,

                        form: props.form,
                        formAction: props.formAction,
                        formEncType: props.formEncType,
                        formMethod: props.formMethod,
                        formNoValidate: props.formNoValidate,
                        formTarget: props.formTarget,

                        tabIndex: props.tabIndex,
                        onFocus: (e) => props.onFocus && props.onFocus(e),
                        onBlur: (e) => props.onBlur && props.onBlur(e)
                    }
                )}
            />
            <Drop
                visibility={isActive ? 'visible' : 'hidden'}
                //TODO: wtf
                spacing={9}
                align="bottom"
                justify="start"
                onClickOutside={(event) => {
                    if (event.target !== inputRef.current) {
                        setActive(false)
                    }
                }}
                target={inputRef}
            >
                <Popover css={cs.drop({isActive})}>
                    <Calendar
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
}

export default forwardRef(DatePicker)