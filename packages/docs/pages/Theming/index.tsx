/* eslint-disable react/no-unescaped-entities */
import { Block, Paragraph as P, Header, Link, Flexbox } from '@stage-ui/core'
import React from 'react'
import Syntax from '../../components/ShowcasePage/Content/Syntax'
import theme from './theme.raw'
import main from './main.raw'
import assets from './assets.raw'
import overrides from './overrides.raw'

export const title = 'Theming'
export const sticky = true

export default () => (
  <Flexbox alignItems="center" column m="0 auto" w={['53rem', '44.5rem', '35.5rem', '17rem']}>
    <Block backgroundColor="surface" borderRadius="1rem" p="m" my="m">
      <Header size="l" m="0">
        Theming
      </Header>
      <P color="hardest">
        StageUI contains two themes itself: Light and Dark. Light setup by default. Any others theme
        icludes user created pass on the theme prop of Viewport component. There's three section to
        describe a theme: main, assets and overrides. To create theme use createTheme function or
        import any other theme and just .replace() it
      </P>
      <Syntax code={theme} />
      <Header>Main</Header>
      <P color="hardest">Contains general variables of theme, like colors, radiuses and sizes</P>
      <Syntax code={main} />
      <Header>Assets</Header>
      <P color="hardest">
        There's all styles that uses between components. Assets must be discribed by the function
        which takes main varaibles for use eg colors in styles. Empty objects here are filled by
        analogy.
      </P>
      <Syntax code={assets} />
      <Header>Overrides</Header>
      <P color="hardest">
        All components have special styled system, that can be overriden from theme and styles prop.
        More details about in you can find in <Link href="/overrides">Overrides</Link> section
      </P>
      <Syntax code={overrides} />
    </Block>
  </Flexbox>
)
