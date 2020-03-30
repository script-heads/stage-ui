import React from 'react'
import { Block, Meter, Text } from '@flow-ui/core'

export default () => {
    return (
        <Block p="l" decoration="surface">
            <Text size="xs" color={c => c.primary}>35 %</Text>
            <Meter value={35} />
        </Block>
    )
}