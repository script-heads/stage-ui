import React from 'react'
import { Block, Meter, Text } from '@flow-ui/core'

export default () => {
    return (
        <Block p="l" decoration="surface">
            <Text size="xs" color={c => c.secondary}>35 %</Text>
            <Meter borderWidth={0}>
                <Meter.Thumb
                    loading
                    value={100}
                    color={c => c.backgroundVariant}
                />
                <Meter.Thumb
                    m="xs"
                    value={35}
                    color={c => c.secondary}
                />
            </Meter>
        </Block>
    )
}