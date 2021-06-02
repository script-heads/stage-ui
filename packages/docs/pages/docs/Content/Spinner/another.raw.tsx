import { Spinner, Button } from '@stage-ui/core'
import React from 'react'

export default () => {
    return (
        <Spinner h="5rem">
            <Button children="Button" />
        </Spinner>
    )
}