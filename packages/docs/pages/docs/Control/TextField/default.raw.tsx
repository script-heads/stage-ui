import React from 'react'
import { TextField } from '@flow-ui/core'
import { Person } from '@flow-ui/core/icons'

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