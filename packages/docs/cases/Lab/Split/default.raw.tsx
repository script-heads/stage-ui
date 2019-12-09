import React from 'react';
import { Block } from '@flow-ui/core';
import { Split } from '@flow-ui/lab';

export default () => {
    return (
        <Split direction="row" areaSize={4}>
            <Block surface="minor" m="0.125rem" flex={1} />
            <Block surface="minor" m="0.125rem" flex={1} />
            <Split direction="column">
                <Block surface="minor" m="0.125rem" flex={1} />
                <Block surface="minor" m="0.125rem" flex={1} />
            </Split>
        </Split>
    )
}