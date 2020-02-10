import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <Icon.Cube
                shape="oval"
                color={c => c.onPrimary}
                background={c => c.primary} 
                size="2rem" 
            />
            <Icon.Archive
                shape="circle"
                color={c => c.primary} 
                size="2rem"
                ml=".5rem"
            />
        </React.Fragment>
    )
}