import { Block, Paragraph as P, Header, Link } from '@flow-ui/core'
import React from 'react'
import Syntax from '../../../../components/old/Syntax'
import theme from './theme.raw'
import main from './main.raw'
import assets from './assets.raw'
import overrides from './overrides.raw'

export const title = 'Theming'
export const sticky = true

export default () => (
    <Block>
        <P>
            FlowUI contains two themes itself: Light and Dark.
            Light setup by default. Any others theme icludes
            user created pass on the theme prop of Viewport
            component. There's three section to describe
            a theme: main, assets and overrides.
            To create theme use createTheme function or
            import any other theme and just .replace() it
        </P>
        <Syntax code={theme} />
        <Header>Main</Header>
        <P>
            Contains general variables of theme, like colors,
            radiuses and sizes
        </P>
        <Syntax code={main} />
        <Header>Assets</Header>
        <P>
            There's all styles that uses between components.
            Assets must be discribed by the function which
            takes main varaibles for use eg colors in styles.
            Empty objects here are filled by analogy.
        </P>
        <Syntax code={assets} />
        <Header>Overrides</Header>
        <P>
            All components have special styled system,
            that can be overriden from theme and styles prop.
            More details about in you can find
            in <Link href="/overrides">Overrides</Link> section
        </P>
        <Syntax code={overrides} />
    </Block>
)