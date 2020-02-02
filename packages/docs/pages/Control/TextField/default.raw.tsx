import React from 'react'
import { TextField } from '@flow-ui/core'
import  * as Icon from '@flow-ui/core/icons'

export default () => {
    return (
        <TextField
            size="m"
            shape="rounded"
            clearable
            leftChild={<Icon.Person/>}
            label="Your name"
            placeholder="John"
        />
    )
}