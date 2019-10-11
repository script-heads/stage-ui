import React from 'react';
import { Block } from '@flow-ui/core';
import { Split } from '@flow-ui/lab';

export default () => {
    return (
        <Split direction="row">
            <Block backgroundColor="red" w="100%" h="100%" />
            <Block backgroundColor="blue" w="100%" h="100%" />
            <Split direction="column">
                <Block backgroundColor="yellow" w="100%" h="100%" />
                <Block backgroundColor="purple" w="100%" h="100%" />
            </Split>
        </Split>
    )
}