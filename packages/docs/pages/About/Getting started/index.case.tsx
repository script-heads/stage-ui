/// <reference path="../../../global.d.ts" />
import { Block, Paragraph as P, Link } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../components/Syntax'
import ViewportCode from '../Getting started/viewport.raw'

export const title = 'Getting started'
export const sticky = true

export default () => (
    <Block>
        <P>Install FlowUI.</P>
        <Syntax code={'npm i @flow-ui/core'} />
        <P>Use <Link href="/viewport">Viewport</Link> component at the top level of your application. 
        It provide theme to all Flow components, apply some Reset CSS and had another useful configurations.</P>
        <Syntax code={ViewportCode} />
    </Block>
)