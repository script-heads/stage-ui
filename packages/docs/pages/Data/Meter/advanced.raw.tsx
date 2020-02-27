import React from 'react'
import { Meter } from '@flow-ui/core'

export default () => {
    return (
        <Meter>
            <Meter.Thumb 
                loading
                value={100} 
                color={c => c.onSurface}
            />
            <Meter.Thumb 
                m="xs" 
                value={30} 
            />
        </Meter>
    )
}