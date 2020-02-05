import { Block, Paragraph } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../components/Syntax'
import ViewportCode from '../Getting started/viewport.raw'

export const title = 'Getting started'
export const sticky = true

export default () => (
    <Block>
        <Paragraph>The main rule is you should wrap entire application with <b>Viewport</b>.</Paragraph>
        <Paragraph>Viewport provides theme in all components, use <b>prop</b> theme to change it</Paragraph>
        <Syntax code={ViewportCode} />
    </Block>
)