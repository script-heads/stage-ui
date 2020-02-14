import { Block, Paragraph, Header } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../components/Syntax'

export const title = 'Bundle Size'
export const sticky = true
        'icons'

export default () => (
    <Block>
        <Header p="1rem 0">Size matters</Header>
        <Paragraph>Flow-UI package is large.</Paragraph>
        <Header p="1rem 0">How to reduce the bundle size?</Header>
        <Paragraph>Lets see how we can configure babel-loaded to reduce the bundle size.</Paragraph>
        <Header size="xs" pt="1rem">1 - Install babel-plugin-import for webpack </Header>
        <Syntax code={'yarn add -D babel-plugin-import' as any}/>
        <Header size="xs">2 - Add babelImportPlugins into webpack.config</Header>
        <Syntax code={`{
    test: /\.tsx?$/,
    use: {
        loader: 'babel-loader',
        options: {
            plugins: [
                ...require('@flow-ui/core/babelImportPlugins'),
            ]
        }
    }
}` as any}/>
                    
    </Block>
)