import React from 'react'
import { DatePicker } from '@stage-ui/core'

export default () => {
    return (
        <DatePicker
            type="day"
            format="YYYY-MM-DD"
            label={'Please pick a date'}
        />
    )
}