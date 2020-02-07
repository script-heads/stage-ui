import { Block, Paragraph, Header } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../components/Syntax'

export const title = 'Bundle Size'
export const sticky = true
        'icons'

export default () => (
    <Block>
        <Header p="1rem 0">Bundle size matters</Header>
        <Paragraph>Flow-UI package is large.</Paragraph>
        <Header p="1rem 0">How to reduce the bundle size?</Header>
        <Header size="s">1) Install babel-plugin-import for webpack </Header>
        <Syntax code={'yarn add -D babel-plugin-import' as any}/>
        <Header size="s">2) Import importPlugin into your webpack.config</Header>
        <Syntax code={`const coreImportPlugin = require('@flow-ui/core/importPlugin')` as any}/>
        <Header size="s">3) add importPlugin into your webpack.config</Header>
        <Syntax code={`{
    test: /\.tsx?$/,
    use: {
        loader: 'babel-loader',
        options: {
            plugins: [
                ...coreImportPlugin,
            ]
        }
    }
}` as any}/>
                    
    </Block>
)