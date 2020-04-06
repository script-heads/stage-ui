import { Button, Flexbox } from '@stage-ui/core'
import { Compass, ArrowRight } from '@stage-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Flexbox>
            <Button color={c => c.primary}>
                <Compass size="1rem" pr="0.5rem" />
                Compas
            </Button>
            <Button ml={'0.5rem'} color={c => c.primary}>
                Next
                <ArrowRight size="1rem" pl="0.5rem" />
            </Button>
        </Flexbox>
    )
}