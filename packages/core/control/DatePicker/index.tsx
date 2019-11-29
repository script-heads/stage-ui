/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import moment, { Moment } from 'moment'
import React, { FC, forwardRef, RefObject, useLayoutEffect, useRef, useState, Fragment, useEffect } from 'react'
import Icon from '../../content/Icon'
import Drop from '../../layout/Drop'
import Popover from '../../layout/Popover'
import DateGrid from './DateGrid'
import datePickerStyles from './styles'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import maskConf from './mask'
import Field from '../../misc/hocs/Field'
import useContainer from '../../misc/hooks/useContainer'
import useMask from '../../misc/hooks/useMask'
import { jsx } from '@emotion/core'

const DatePicker: FC<Types.Props> = (props, ref: RefObject<HTMLDivElement>) => {

    const {
        locale = 'ru',
        format = 'YYYY-MM-DD',
        defaultValue,
        decoration = 'outline', 
        size = 'medium', 
        shape='rounded', 
        tabIndex = 0,
        label 
    } = props

    moment.locale(locale)

    const now = moment()
    const [value, setValue] = useState(now)
    const [isActive, setActive] = useState(false)
    const [isEmpty, setEmpty] = useState<boolean>(
        defaultValue === '' ||
        defaultValue === 'undefined'
    )
    
    const styles = useStyles(props, datePickerStyles, 'DatePicker')
    
    const {attributes, focus} = useContainer(props, true, props.decoration != 'none')
    const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
    const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')
    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xlarge')
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
                decoration={decoration}
                size={size}
                shape={shape}
                focus={focus}
                styles={styles}
                isLabelOutside={isLabelOutside}
                isLabelOverlay={isLabelOverlay}

                attributes={{
                    ...attributes,
                    tabIndex,
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
                        css: styles.input({isLabelOverlay}),
                        
                        defaultValue: defaultValue ? moment(defaultValue, format) : undefined,
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
                distance={9}
                align="bottom"
                justify="start"
                onClickOutside={(event) => {
                    if (event.target !== inputRef.current) {
                        setActive(false)
                    }
                }}
                target={inputRef}
            >
                <Popover css={styles.drop({isActive})}>
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
}

export default forwardRef(DatePicker)