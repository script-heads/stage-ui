import React from 'react'
import { Spinner, Icon } from '@flow-ui/core'

export default () => {
    return (
        <Spinner size='4rem' >
            <Icon 
                type={i => i.outline.settings}
            />
        </Spinner>
    )
}