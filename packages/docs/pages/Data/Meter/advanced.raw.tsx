import React from 'react'
import { Meter } from '@flow-ui/core'

export default () => {
    return (
        <Meter>
            <Meter.Thumb 
                loading
                percent={100} 
                color={c => c.onSurface}
            />
            <Meter.Thumb 
                m="xs" 
                percent={30} 
            />
        </Meter>
    )
}