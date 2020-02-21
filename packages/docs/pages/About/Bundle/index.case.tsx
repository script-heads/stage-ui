import { Block, Paragraph as P, Header } from '@flow-ui/core'
import React from 'react'
import config from './config.raw'
import icons from './icons.raw'
import Syntax from '../../../components/Syntax'

export const title = 'Bundle'
export const sticky = true
        'icons'

export default () => (
    <Block>
        <P>
            It is convenient to import components from
            the FlowUI index file, however, this design
            leads to the fact that all components get
            into the bundle at once. This may lead to
            its undesirable increase.
        </P>
        <Syntax code={`import {Button} from '@flow-ui/core'`}/>
        <P>
            To avoid this please use our babel plugin.
        </P>
        <Header>Install</Header>
        <Syntax code={'yarn add -D babel-plugin-import'}/>
        <Header>Configure</Header>
        <Syntax code={config}/>
        <Header>Сaveat</Header>
        <P>
            Avoid imports all icons with * syntax.
            Plugin can't transform this construction
            and all icons will be packed in bundle.
            It's about 300kb.
        </P>  
        <Syntax code={icons}/>     
    </Block>
)