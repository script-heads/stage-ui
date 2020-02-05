import React from 'react'
import { Toolbar } from '@flow-ui/lab'
import { Button } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'

export default () => {
    return (
        <Toolbar>
            <Button>One</Button>
            <Icon.Archive />
        </Toolbar>

    )
}