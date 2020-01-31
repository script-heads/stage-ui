import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <Icon.Clock 
                size="4rem" 
            />
            <Icon.Clock 
                size="4rem" 
                type="filled" 
            />
        </React.Fragment>
    )
}