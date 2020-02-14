
import { Block, Header, Link, Paragraph as P } from '@flow-ui/core'
import React from 'react'
import colorProps from './colorProps.raw'
import FlowCode from './flow.raw'
import StyleProp from './styleProp.raw'
import Syntax from '../../../components/Syntax'

export const title = 'Props'
export const sticky = true

export default () => (
    <Block>
        <P>FlowUI comonents have special props to customize thier styles</P>
        <Header>Styles prop</Header>
        <P>Like style tag in HTML or CSS prop in emotion with 
            styles prop you can provide custom styles to any component.</P>
        <P>Component may render in DOM many different HTML elements which have unique classNames.
            So in style object you can provide CSS for each of them. 
            If it's a typescript project you instantly have a tip what classes exist in this component. 
            If it's not you may have find this information on comonent documentation page. 
            Also here you access component internal state for attach some styles in these cases.
            More about it written in <Link href="/overrides">Overrides</Link> section.</P>
        <Syntax code={StyleProp}/>
        <Header>Color props</Header>
        <P>All colors described in Theme FlowUI turn into Objects with useful 
            methods that give you the opportunity to to adjust the color depending on the situation.
            To access theme colors provide function in these props. 
            They recive theme colors and return one to component.
            Also you may put here ordinary color string or variable directly from Theme.
        </P>
        <Syntax code={colorProps}/>
    </Block>
)