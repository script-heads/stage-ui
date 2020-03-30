import { useComponent } from '@flow-ui/system'
import moment, { Moment } from 'moment'
import React, { forwardRef, RefForwardingComponent, useLayoutEffect, useRef, useState } from 'react'
import DateGrid from './DateGrid'
import styles from './styles'
import Types from './types'

const DatePicker: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const {
        locale = 'ru',
    } = props

    moment.locale(locale)

    const now = moment()
    const [value, setValue] = useState(now)

    const { cs, attributes, events } = useComponent('Calendar', { 
        props, 
        styles,  
    })

    const minValue = props.minValue ? moment(props.minValue).startOf('day') : now.clone().add(-500, 'year')
    const maxValue = props.maxValue ? moment(props.maxValue).startOf('day') : now.clone().add(500, 'year')

    useLayoutEffect(() => {
        if (props.value) {
            setValue(moment(props.value))
        }
    }, [props.value])

    function onChange(value: Moment) {
        if (!value.isValid) {
            return
        }

        setValue(value)
        
        if (props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <DateGrid
            attributes={attributes}
            styles={cs}
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            onChange={onChange}
            hideToday={props.hideToday || false}
            type={props.type || 'day'}
        />        
    )
}

export default forwardRef(DatePicker)