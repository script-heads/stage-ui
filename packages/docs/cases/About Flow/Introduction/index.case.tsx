import React from 'react';
import { Block, H1, T1, useFlow, H2, Divider } from "@flow-ui/core";
import Syntax from './Syntax';
import ViewportCode from './viewport.raw';
import BlockCode from './block.raw';

export const title = ' '
export const sticky = true;

export default () => (
    <Block>
        <H1 pb="1rem">Getting started</H1>

        <H2 p="1rem 0">Rule 1</H2>
        <T1>The main rule is you should wrap entire application with <b>Viewport</b>.</T1>
        <T1>Viewport provides theme in all components, use <b>prop</b> theme to change it</T1>
        <Syntax code={ViewportCode} />
        
        
        <H2 p="1rem 0">Rule 2</H2>
        <T1>Use <b>Block</b> instead of div elements</T1>
        <T1>I'ts has much more power then regular divs</T1>
        <Syntax code={BlockCode} />
    </Block>
)