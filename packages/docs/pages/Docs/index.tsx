/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Header, Link, Paragraph as P, Text } from '@stage-ui/core'
import Syntax from '../../components/ShowcasePage/Content/Syntax'
import ViewportCode from './viewport.raw'
import styleProp from './styleProp.raw'
import colorProps from './colorProps.raw'
import spacingProps from './spacingProps.raw'
import flexGridProps from './flexGridProps.raw'
import layoutProps from './layoutProps.raw'
import borderProps from './borderProps.raw'
import overridesExample from './overridesExample.raw'
import theme from './theme.raw'
import main from './main.raw'
import assets from './assets.raw'
import overrides from './overrides.raw'
import List from '../../components/ShowcasePage/Content/List'

export const title = 'Getting started'
export const sticky = true

export default () => (
  <>
    <Header size="l" id="getting_started">
      Getting started
    </Header>
    <P color="hardest">Install StageUI</P>
    <Syntax code="npm i @stage-ui/core" />
    <P color="hardest">
      Use{' '}
      <Text weight="bold" color="primary">
        Viewport
      </Text>{' '}
      component at the top level of your application. It provide theme to all Flow components, apply
      some Reset CSS and had another useful configurations.
    </P>
    <Syntax code={ViewportCode} />

    <Header size="l" pt="4rem" id="props">
      Props
    </Header>
    <P color="hardest">
      Our comonents have special props to customize thier styles, like style tag in HTML or CSS prop
      in emotion with styles prop you can provide custom styles to any component.
    </P>
    <P color="hardest">
      Component may render in DOM many different HTML elements which have unique classNames. So in
      style object you can provide CSS for each of them. If it's a typescript project you instantly
      have a tip what classes exist in this component. If it's not you may have find this
      information on comonent documentation page. Also here you access component internal state for
      attach some styles in these cases. More about it written in{' '}
      <Link href="/overrides">Overrides</Link> section.
    </P>
    <Syntax code={styleProp} />
    <Header size="l" pt="4rem" id="color">
      Color
    </Header>
    <P color="hardest">
      All colors described in Theme StageUI turn into Objects with useful methods that give you the
      opportunity to to adjust the color depending on the situation. To access theme colors provide
      function in these props. They recive theme colors and return one to component. Also you may
      put here ordinary color string or variable directly from Theme.
    </P>
    <Syntax code={colorProps} />
    <Header size="l" pt="4rem" id="margin-padding">
      Margin and Padding
    </Header>
    <P color="hardest">
      Shorthand for margin and padding styles with size alias from theme spacing
    </P>
    <Syntax code={spacingProps} />
    <List
      data={[
        'm: margin',
        'mt: margin-top',
        'mr: margin-right',
        'mb: margin-bottom',
        'ml: margin-left',
        'mx: margin-left and margin-right',
        'my: margin-top and margin-bottom',
        'p : padding',
        'pt: padding-top',
        'pr: padding-right',
        'pb: padding-bottom',
        'pl: padding-left',
        'px: padding-left and padding-right',
        'py: padding-top and padding-bottom',
      ]}
      higlightBefore=":"
    />
    <Header size="l" pt="4rem" id="flex-grid">
      Flexbox and grid
    </Header>
    <P color="hardest">Shorthand for flexbox and grid children styles</P>
    <Syntax code={flexGridProps} />
    <List
      data={[
        'flex: flex',
        'flexBasis: flex-basis',
        'flexGrow: flex-grow',
        'flexShrink: flex-shrink',
        'alignSelf: align-self',
        'justifySelf: justify-self',
        'gridColumn: grid-column',
        'gridRow: grid-row',
        'gridArea: grid-area',
        'gridColumnStart: grid-column-start',
        'gridColumnEnd: grid-column-end',
        'gridRowStart: grid-row-start',
        'gridRowEnd: grid-row-end',
        'placeSelf: place-self',
      ]}
      higlightBefore=":"
    />
    <Header size="l" pt="4rem" id="layout">
      Layout
    </Header>
    <P color="hardest">Shorthand for layout styles</P>
    <Syntax code={layoutProps} />
    <List
      data={['w: width', 'h: height', 'visibility: visibility', 'display: display']}
      higlightBefore=":"
    />
    <Header size="l" pt="4rem" id="border">
      Border
    </Header>
    <P color="hardest">Shorthand for border styles</P>
    <Syntax code={borderProps} />
    <List
      data={[
        'borderWidth: border-width',
        'borderStyle: border-style',
        'borderColor: border-color',
        'borderRadius: border-radius',
      ]}
      higlightBefore=":"
    />

    <Header size="l" pt="4rem" id="overrides">
      Overrides
    </Header>
    <P color="hardest">
      Often you need to override component styles that depended on its internal state and
      properties. There are two places you can do this: theme and the style props.
    </P>
    <Header size="s">Syntax</Header>
    <P color="hardest">
      For example Menu have two CSS classes for container and item elements. Here you describe
      styles for any of them. This styles applyed with their own styles of component.
    </P>
    <Syntax code={overridesExample} />

    <Header size="l" pt="4rem" id="theming">
      Theming
    </Header>
    <P color="hardest">
      StageUI contains two themes itself: Light and Dark. Light setup by default. Any others theme
      icludes user created pass on the theme prop of Viewport component. There's three section to
      describe a theme: main, assets and overrides. To create theme use createTheme function or
      import any other theme and just .replace() it
    </P>
    <Syntax code={theme} />
    <Header size="s">Main</Header>
    <P color="hardest">Contains general variables of theme, like colors, radiuses and sizes</P>
    <Syntax code={main} />
    <Header size="s">Assets</Header>
    <P color="hardest">
      There's all styles that uses between components. Assets must be discribed by the function
      which takes main varaibles for use eg colors in styles. Empty objects here are filled by
      analogy.
    </P>
    <Syntax code={assets} />
    <Header size="s">Overrides</Header>
    <P color="hardest">
      All components have special styled system, that can be overriden from theme and styles prop.
      More details about in you can find in <Link href="/overrides">Overrides</Link> section
    </P>
    <Syntax code={overrides} />
  </>
)
