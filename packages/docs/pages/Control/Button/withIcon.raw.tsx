import { Button, Flexbox } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Flexbox>
            <Button color={c => c.primary}>
                <Icon.Compass size="1rem" pr="0.5rem" />
                Compas
            </Button>
            <Button ml={'0.5rem'} color={c => c.primary}>
                Next
                <Icon.ArrowRight size="1rem" pl="0.5rem" />
            </Button>
        </Flexbox>
    )
}