import { TextField } from '@stage-ui/core'
import React from 'react'

export default () => {
    return (
        <TextField
            multiline
            label="Code"
            defaultValue={'Test\nCode'}
            leftChildNumber={(index) => `${index+1}.`}
        />
    )
}