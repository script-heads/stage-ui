import { Spinner, Button } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <Spinner h="5rem">
            <Button children="Button" />
        </Spinner>
    )
}