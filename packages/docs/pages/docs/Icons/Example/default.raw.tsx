import { Clock } from '@stage-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <Clock 
                size="4rem" 
            />
            <Clock 
                size="4rem" 
                type="filled" 
            />
        </React.Fragment>
    )
}