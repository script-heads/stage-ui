import React from 'react';
import { Block, H1, T1, useFlow } from "@flow-ui/core";
import Syntax from './Syntax';
import ViewportCode from './viewport.raw';

export const title = ' '

export default () => (
    <Block>
        <H1 pb="1rem">Getting started</H1>
        <T1>The main rule is you should wrap entire application with <b>Viewport</b>.</T1>
        <T1>Viewport provides theme in all components, use <b>prop</b> theme to change it</T1>
        <Syntax code={ViewportCode} />

    </Block>
)