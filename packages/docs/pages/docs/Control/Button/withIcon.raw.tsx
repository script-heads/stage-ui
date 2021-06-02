import { Button, Grid } from '@stage-ui/core'
import { ArrowRight, ArrowLeft, Cube } from '@stage-ui/icons'
import React from 'react'

export default () => {
    return (
        <Grid gap="0.5rem">
            <Button
                leftChild={<ArrowLeft />}
                label="Go left"
            />
            <Button
                rightChild={<ArrowRight />}
                label="Go right"
            />
            <Button>
                <Cube />
            </Button>
        </Grid>
    )
}