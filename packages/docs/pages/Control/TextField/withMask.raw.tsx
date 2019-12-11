import React from 'react';
import { TextField } from '@flow-ui/core';

export default () => {
    return (
        <TextField
            label={'Phone'}
            placeholder='Please enter your phone'
            masked={{
                mask: "+7 (000) 000-00-00"
            }}
        />
    )
}