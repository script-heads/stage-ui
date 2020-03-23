import { Drop, ScrollView } from '@flow-ui/core'
import { ArrowIosDownward, Close } from '@flow-ui/core/icons'
import DropTypes from '@flow-ui/core/layout/Drop/types'
import Field from '@flow-ui/core/misc/hocs/Field'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, Fragment, RefForwardingComponent, useEffect, useRef, useState } from 'react'
import styles from './styles'
import Types from './types'

const Select: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const {
        decoration = 'outline', 
        size = 'm', 
        shape='rounded', 
        tabIndex = 0,
        maxScrollHeight = '16rem',
        keepOpen = false,
    } = props

    /**
     * References
     */
    const fieldRef = useRef<HTMLDivElement>(null)
    const dropRef = useRef<DropTypes.Ref>(null)
    /**
     * Drop will show only 
     * if isOpen === true
     * and values.length > 0
     */
    const [isOpen, setOpen] = useState(false)
    /**
     * Value need for search
     */
    const [searchQuery, setSearchQuery] = useState('')
    /**
     * Store of selected values
     */
    const [values, setValues] = useState<Types.Option[]>([])
    /**
     * Object for variant styles
     */
    const styleState: Types.StyleState = { 
        decoration, 
        shape, 
        size,
        isOpen 
    }
    /**
     * This options will be shown in drop
     */
    const options = props.options.filter(option => {
            // Filter only unselected values
            if (values.find(o => o.value === option.value)) {
                return false
            }
            // Filter only matching search
            if (searchQuery && !option.text.toUpperCase().match(searchQuery.toUpperCase())) {
                return false
            }
            return true
        })

    const { cs, attributes, events, focus } = useComponent('Select', { 
        props, 
        styles,
        styleProps: {
            container: ['flow','layout'], 
            field:['color','border','padding']
        },
        focus: {
            applyDecoration: false,
        }
    }, {
        isOpen: isOpen && options.length > 0
    })

    /**
     * Component did mount
     */
    useEffect(() => {
        if (props.defaultValues) {
            setValues(props.defaultValues)
        }
    }, [])

    /**
     * Component will receive value
     */
    useEffect(() => {
        if (props.values) {
            setValues(props.values)
        }
    }, [props.values])

    /**
     * Update drop position after
     * field changing his height
     */
    useEffect(() => {
        isOpen && dropRef.current?.updatePosition()
    }, [values])

    /*
    * Keyboard control
    * TODO: handle keyboard control
    */
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case 'Enter':
                break
            case 'ArrowUp':
                break
            case 'ArrowDown':
                break
            case 'Backspace':
                break
        }
        props.onKeyDown && props.onKeyDown(event)
    }

    /**
     * Open and close select drop
     */
    function toggleOpen(e) {
        e.stopPropagation()
        setOpen(!isOpen)
    }

    /**
     * Call when ever values change
     * support controlled and uncontrolled
     * second arg need if you need filter values by search
     */
    function onChange(values: Types.Option[], value?: Types.Option, search = '') {
        setSearchQuery(search)
        if (props.values === undefined) {
            setValues(values)
        }
        props.onChange?.(values, value)
    }

    /**
     * Setting values
     */
    function setOption(value: Types.Option) {
        if (props.multiselect) {
            onChange(values.concat(value), value)
        } else {
            onChange([value], value)
        }
        if (!keepOpen) {
            setOpen(false)
        }
    }

    /**
     * Unsetting values
     */
    function unsetOption(value: Types.Option) {
        onChange(values.filter(v => v.value !== value.value), value)
    }

    /**
     * Clears values
     * also can set filter for search
     */
    function clearValues(search = '') {
        onChange([], undefined, search)
    }

    return (
        <Fragment>
            <Field
                {...props}

                styles={cs}
                ref={fieldRef}

                size={size}
                state={styleState}
                focus={focus}
                shape={shape}
                decoration={decoration}
                clearable={props.clearable && values.length > 0}
                onClear={() => clearValues()}

                attributes={{ ...attributes, tabIndex }}
                events={{
                    ...events.all,
                    onClick: (e) => {
                        e.preventDefault()
                        toggleOpen(e)
                        events.all.onClick?.(e)
                    },
                    onKeyDown: (e) => handleKeyDown(e)
                }}
                rightChild={(
                    props.rightChild || <ArrowIosDownward
                        alignSelf="center"
                        size={size}
                        color={c => isOpen ? c.primary : c.light}
                        rotate={(isOpen && options.length > 0) ? 180 : 0}
                        onClick={(e) => {
                            e.preventDefault()
                            toggleOpen(e)
                        }}
                    />
                )}
                children={(
                    <div css={cs.selectedContainer}>
                        {props.multiselect && values.map(option => (
                            <div css={cs.tag(styleState)} key={option.value}>
                                {option.text}
                                <Close
                                    size={size}
                                    css={cs.tagRemove(styleState)}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        unsetOption(option)
                                    }}
                                />
                            </div>
                        ))}
                        <input
                            size={5}
                            disabled={!props.searchable}
                            css={cs.selectedInput({
                                searchMode: searchQuery !== '',
                                multiselect: !!props.multiselect
                            })}
                            placeholder={(!props.multiselect || values.length === 0) ? props.placeholder : ''}
                            value={(!props.multiselect && values[0]?.text) || searchQuery}
                            onChange={(e) => {
                                if (props.multiselect) {
                                    setSearchQuery(e.target.value)
                                } else {
                                    clearValues(e.target.value)
                                }
                            }}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setOpen(true)
                            }}
                        />
                    </div>
                )}
            />
            <Drop
                visible={(isOpen && options.length > 0)}
                ref={dropRef}
                onClickOutside={(e, outTarget) => {
                    if (outTarget) {
                        toggleOpen(e)
                    }
                }}
                stretchWidth
                justify="start"
                target={fieldRef}
                children={(
                    <div css={cs.drop(styleState)}>
                        <ScrollView
                            size="xs" 
                            style={{ maxHeight: maxScrollHeight }}
                            sendFlowScollEvent={false}
                            children={options.map(option => (
                                <div
                                    css={cs.dropItem(styleState)}
                                    key={option.value}
                                    children={option.text}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setOption(option)
                                    }}
                                />
                            ))}
                        />
                    </div>
                )}
            />
        </Fragment>
    )
}

export default forwardRef(Select)