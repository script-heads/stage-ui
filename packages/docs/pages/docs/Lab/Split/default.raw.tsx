import React from 'react'
import { Block } from '@stage-ui/core'
import { Split } from '@stage-ui/lab'

export default () => {
    return (
        <Split direction="row" areaSize={4}>
            <Block decoration="minorShadow" m="0.125rem" flex={1} />
            <Block decoration="minorShadow" m="0.125rem" flex={1} />
            <Split direction="column">
                <Block decoration="minorShadow" m="0.125rem" flex={1} />
                <Block decoration="minorShadow" m="0.125rem" flex={1} />
            </Split>
        </Split>
    )
}