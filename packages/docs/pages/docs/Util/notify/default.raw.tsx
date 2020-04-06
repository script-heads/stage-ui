import React from 'react'
import { Button, notify } from '@stage-ui/core'

export default () => {
    return (
        <Button
            onClick={() => {
                notify({
                    title: 'Hello',
                    message: 'I\'m notification displayed in right corner of your window',
                    timeout: 3000
                })
            }}
            children="Show notify"
        />
    )
}