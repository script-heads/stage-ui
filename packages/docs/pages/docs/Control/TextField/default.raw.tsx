import React from 'react'
import { TextField } from '@stage-ui/core'
import { Person } from '@stage-ui/icons'

export default () => {
    return (
        <TextField
            size="m"
            shape="rounded"
            clearable
            leftChild={<Person />}
            label="Your name"
            placeholder="John"
        />
    )
}