import React from 'react'
import { Toolbar } from '@flow-ui/lab'
import { Button } from '@flow-ui/core'
import { Archive } from '@flow-ui/core/icons'

export default () => {
    return (
        <Toolbar>
            <Button>One</Button>
            <Archive />
        </Toolbar>

    )
}