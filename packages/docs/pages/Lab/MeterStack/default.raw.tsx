import React from 'react'
import { MeterStack } from '@flow-ui/lab'
import { Meter } from '@flow-ui/core'

export default () => {
    return (
        <MeterStack size="xl" styles={{
            meterThumb: () => [{
                border: '1px solid #fff',
            }]
        }}>
            <Meter percent={100} color={c => c.error} />
            <Meter loading percent={60} color={c => c.primary} />
            <Meter percent={20} color={c => c.success} />
        </MeterStack>
    )
}