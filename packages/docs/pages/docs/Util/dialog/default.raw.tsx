import React from 'react'
import { Button, dialog } from '@stage-ui/core'

export default () => {
    return (
        <Button
            onClick={() => {
                dialog({
                    title: 'Hello',
                    message: 'Ops, something went wrong',
                    buttonText: 'Close'
                })
            }}
            children="Show dialog"
        />
    )
}