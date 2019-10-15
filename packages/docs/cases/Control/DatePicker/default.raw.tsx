import React from 'react';
import { DatePicker } from '@flow-ui/core';

export default () => {
    return (
        <DatePicker
            type="day"
            format="YYYY-MM-DD"
            label={'Please pick a date'}
        />
    )
}