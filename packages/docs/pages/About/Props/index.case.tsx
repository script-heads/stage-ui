
/// <reference path="../../../global.d.ts" />
import { Block, Header, Link, Paragraph as P } from '@flow-ui/core'
import React from 'react'
import colorProps from './colorProps.raw'
import StyleProp from './styleProp.raw'
import Syntax from '../../../components/Syntax'

export const title = 'Props'
export const sticky = true

export default () => (
    <Block>
        <P>FlowUI comonents have special props to customize thier styles</P>
        <Header>Styles</Header>
        <P>Like style tag in HTML or CSS prop in emotion with 
            styles prop you can provide custom styles to any component.</P>
        <P>Component may render in DOM many different HTML elements which have unique classNames.
            So in style object you can provide CSS for each of them. 
            If it's a typescript project you instantly have a tip what classes exist in this component. 
            If it's not you may have find this information on comonent documentation page. 
            Also here you access component internal state for attach some styles in these cases.
            More about it written in <Link href="/overrides">Overrides</Link> section.</P>
        <Syntax code={StyleProp}/>
        <Header>Color</Header>
        <P>All colors described in Theme FlowUI turn into Objects with useful 
            methods that give you the opportunity to to adjust the color depending on the situation.
            To access theme colors provide function in these props. 
            They recive theme colors and return one to component.
            Also you may put here ordinary color string or variable directly from Theme.
        </P>
        <Syntax code={colorProps}/>
        <Header>Margin and Padding</Header>
        <P>Shorthand for margin and padding styles</P>
        <Syntax code={colorProps}/>
        <ul>
            <li>m: margin</li>
            <li>mt: margin-top</li>
            <li>mr: margin-right</li>
            <li>mb: margin-bottom</li>
            <li>ml: margin-left</li>
            <li>mx: margin-left and margin-right</li>
            <li>my: margin-top and margin-bottom</li>
            <li>p : padding</li>
            <li>pt: padding-top</li>
            <li>pr: padding-right</li>
            <li>pb: padding-bottom</li>
            <li>pl: padding-left</li>
            <li>px: padding-left and padding-right</li>
            <li>py: padding-top and padding-bottom</li>
        </ul>
        <Header>Flexbox and grid</Header>
        <P>Shorthand for flexbox and grid children styles</P>
        <Syntax code={colorProps}/>
        <ul>
            <li>flex: flex</li>
            <li>flexBasis: flex-basis</li>
            <li>flexGrow: flex-grow</li>
            <li>flexShrink: flex-shrink</li>
            <li>alignSelf: align-self</li>
            <li>justifySelf: justify-self</li>
        </ul>
        <ul>
            <li>gridColumn: grid-column</li>
            <li>gridRow: grid-row</li>
            <li>gridArea: grid-area</li>
            <li>gridColumnStart: grid-column-start</li>
            <li>gridColumnEnd: grid-column-end</li>
            <li>gridRowStart: grid-row-start</li>
            <li>gridRowEnd: grid-row-end</li>
            <li>placeSelf: place-self</li>
        </ul>
        <Header>Layout</Header>
        <P>Shorthand for layout styles</P>
        <Syntax code={colorProps}/>
        <ul>
            <li>w: width</li>
            <li>h: height</li>
            <li>visibility: visibility</li>
            <li>display: display</li>
        </ul>
        <Header>Border</Header>
        <P>Shorthand for border styles</P>
        <Syntax code={colorProps}/>
        <ul>
            <li>borderWidth: border-width</li>
            <li>borderStyle: border-style</li>
            <li>borderColor: border-color</li>
            <li>borderRadius: border-radius</li>
        </ul>
    </Block>
)