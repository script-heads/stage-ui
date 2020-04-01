import { Block, Paragraph as P, Header } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../../components/Page/Content/Syntax'
import syntaxExample from './syntaxExample.raw'
import variantExample from './variantExample.raw'

export const title = 'Overrides'
export const sticky = true

export default () => (
    <Block>
        <P>
            Often you need to override
            component styles that depended on its internal
            state and properties. Styles may also be
            necessary for each HTML element that is
            rendered in a DOM tree. Therefore,
            we have developed a special system based
            on emotion that takes these needs into account.
            There are two places you can do this:
            theme and the styles prop.
        </P>
        <Header>Syntax</Header>
        <P>
            For example Menu have two CSS classes
            for container and item elements.
            Here you describe styles for any of them.
            This styles applyed with their own
            styles of component.
        </P>
        <Syntax code={syntaxExample} />
        <Header>The Variant</Header>
        <P>
            Variant is a function that is passed to
            some component classes. It takes an object
            in which you can describe special styles
            for component states. The first level is
            the name of the state, the second is its
            value, the third style is assigned to the
            element in the case if the state takes
            this value. If state are boolean styles
            are described directly in the state name.
            All states are typed, so
            you can get hints from your IDE
            about values that you can override.
            If you develop in plain javascript or
            use simple text editor see this information
            in documentation.
        </P>
        <Syntax code={variantExample} />
    </Block>
)