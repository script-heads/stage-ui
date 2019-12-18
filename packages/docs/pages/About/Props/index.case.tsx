
import { Block, Text, Header, Anchor } from '@flow-ui/core'
import React from 'react'
import ColorCode from './color.raw'
import FlowCode from './flow.raw'
import IconCode from './icon.raw'
import Syntax from '../../../components/Syntax'

export const title = 'Props'
export const sticky = true

export default () => (
    <Block>
        <Text>Some components have functional props</Text>
        <Text>Let's see couple examples below</Text>

        <Header p="1rem 0">Color</Header>
        <Text>For example let's see Button component</Text>
        <Text>Button have prop color you can just give it a string like "#000000" which apparently makes it black</Text>
        <Text>But more usefull will be give it a function which will provide typed color object for you</Text>
        <Text>We using theme color object as first argument of function then each color are instance of Chroma.js</Text>
        <Syntax code={ColorCode} />
        <Text pb="1rem">For more information you may also check <Anchor
            href="https://vis4.net/chromajs/"
            target="_blank"
            children="https://vis4.net/chromajs/"
        /></Text>

        <Header p="1rem 0">Icon</Header>
        <Text>Icon also support functional props</Text>
        <Text>See example, we able to select icon type with intellisense of our IDE</Text>
        <Syntax code={IconCode} />

        <Header p="1rem 0">Short props</Header>
        <Text>All flow components have a short props</Text>
        <Text>Let's see couple examples below</Text>

        <Header p="1rem 0">Self flow</Header>
        <Text>Flow components have margin / padding and width / height aliases</Text>
        <Text>margins: m mr ml mt mb mh mv</Text>
        <Text>paddings: p pr pl pt pb ph pv</Text>
        <Text>height: h</Text>
        <Text>width: w</Text>
        <Syntax code={FlowCode} />
    </Block>
)