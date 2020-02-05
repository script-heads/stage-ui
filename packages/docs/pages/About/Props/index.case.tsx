
import { Block, Header, Anchor, Paragraph } from '@flow-ui/core'
import React from 'react'
import ColorCode from './color.raw'
import FlowCode from './flow.raw'
import Syntax from '../../../components/Syntax'

export const title = 'Props'
export const sticky = true

export default () => (
    <Block>
        <Paragraph>Some components have functional props</Paragraph>
        <Paragraph>Let's see couple examples below</Paragraph>

        <Header p="1rem 0">Color</Header>
        <Paragraph>For example let's see Button component</Paragraph>
        <Paragraph>Button have prop color you can just give it a string like "#000000" which apparently makes it black</Paragraph>
        <Paragraph>But more usefull will be give it a function which will provide typed color object for you</Paragraph>
        <Paragraph>We using theme color object as first argument of function then each color are instance of Chroma.js</Paragraph>
        <Syntax code={ColorCode} />
        <Paragraph pb="1rem">For more information you may also check <Anchor
            href="https://vis4.net/chromajs/"
            target="_blank"
            children="https://vis4.net/chromajs/"
        /></Paragraph>

        <Header p="1rem 0">Short props</Header>
        <Paragraph>All flow components have a short props</Paragraph>
        <Paragraph>Let's see couple examples below</Paragraph>

        <Header p="1rem 0">Self flow</Header>
        <Paragraph>Flow components have margin / padding and width / height aliases</Paragraph>
        <Paragraph>margins: m mr ml mt mb mh mv</Paragraph>
        <Paragraph>paddings: p pr pl pt pb ph pv</Paragraph>
        <Paragraph>height: h</Paragraph>
        <Paragraph>width: w</Paragraph>
        <Syntax code={FlowCode} />
    </Block>
)