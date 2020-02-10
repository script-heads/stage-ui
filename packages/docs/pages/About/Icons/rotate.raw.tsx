import * as Icon from '@flow-ui/core/icons'
import React, { useState } from 'react'

export default () => {
    const [deg, setDegree] = useState(0)
    return (
        <React.Fragment>
            <Icon.ArrowIosForward
                shape="oval"
                color={c => c.onPrimary}
                background={c => c.primary} 
                size="2rem" 
                rotate={deg}
                onClick={() => {
                    setDegree(deg ? 0 : 90)
                }}
            />
        </React.Fragment>
    )
}