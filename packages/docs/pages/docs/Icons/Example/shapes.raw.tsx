import { Cube, Archive } from '@stage-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <Cube
                shape="oval"
                color={c => c.onPrimary}
                background={c => c.primary}
                size="2rem"
            />
            <Archive
                shape="circle"
                color={c => c.primary}
                size="2rem"
                ml=".5rem"
            />
        </React.Fragment>
    )
}