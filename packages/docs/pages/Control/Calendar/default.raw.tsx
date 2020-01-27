import React from 'react'
import { Calendar } from '@flow-ui/core'

export default () => {
    return (
        <Calendar
            type="day"
            format="YYYY-MM-DD"
            label={'Please pick a date'}
        />
    )
}