import { Block, Text, Header } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../components/Syntax'
import ViewportCode from '../Getting started/viewport.raw'

export const title = 'Getting started'
export const sticky = true

export default () => (
    <Block>
        <Header pb="1rem">Getting started</Header>
        <Text>The main rule is you should wrap entire application with <b>Viewport</b>.</Text>
        <Text>Viewport provides theme in all components, use <b>prop</b> theme to change it</Text>
        <Syntax code={ViewportCode} />
    </Block>
)