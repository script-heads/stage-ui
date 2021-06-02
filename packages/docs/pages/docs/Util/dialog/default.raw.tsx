import { Button, dialog } from '@stage-ui/core'
import React from 'react'

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
            children="Push"
        />
    )
}