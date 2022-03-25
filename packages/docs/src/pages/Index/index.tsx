/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Header, Link, Paragraph } from '@stage-ui/core'

import ViewportCode from './viewport.raw?raw'
import styleProp from './styleProp.raw?raw'
import colorProps from './colorProps.raw?raw'
import spacingProps from './spacingProps.raw?raw'
import flexGridProps from './flexGridProps.raw?raw'
import layoutProps from './layoutProps.raw?raw'
import borderProps from './borderProps.raw?raw'
import overridesExample from './overridesExample.raw?raw'
import theme from './theme.raw?raw'
import main from './main.raw?raw'
import assets from './assets.raw?raw'
import overrides from './overrides.raw?raw'

import List from '@/components/List'
import Syntax from '@/components/Syntax'

export const title = 'Getting started'
export const sticky = true

export default function Index() {
  return (
    <Block pb="4rem">
      <Header>Getting started</Header>
      <Syntax code="npm i @stage-ui/core" />
      <Paragraph>
        Use Viewport component at the top level of your application. It provide theme to
        all StageUI components, apply some Reset CSS and had another useful
        configurations.
      </Paragraph>
      <Syntax code={ViewportCode} />

      <Header id="props">Props</Header>
      <Paragraph>
        Our comonents have special props to customize thier styles, like style tag in HTML
        or CSS prop in emotion with styles prop you can provide custom styles to any
        component.
      </Paragraph>
      <Paragraph>
        Component may render in DOM many different HTML elements which have unique
        classNames. So in style object you can provide CSS for each of them. If it's a
        typescript project you instantly have a tip what classes exist in this component.
        If it's not you may have find this information on comonent documentation page.
        Also here you access component internal state for attach some styles in these
        cases. More about it written in <Link href="/overrides">Overrides</Link> section.
      </Paragraph>
      <Syntax code={styleProp} />
      <Header id="color">Color</Header>
      <Paragraph>
        All colors described in Theme StageUI turn into Objects with useful methods that
        give you the opportunity to to adjust the color depending on the situation. To
        access theme colors provide function in these props. They recive theme colors and
        return one to component. Also you may put here ordinary color string or variable
        directly from Theme.
      </Paragraph>
      <Syntax code={colorProps} />
      <Header id="margin-padding">Margin and Padding</Header>
      <Paragraph>
        Shorthand for margin and padding styles with size alias from theme spacing
      </Paragraph>
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
      <Header id="flex-grid">Flexbox and grid</Header>
      <Paragraph>Shorthand for flexbox and grid children styles</Paragraph>
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
      <Header id="layout">Layout</Header>
      <Paragraph>Shorthand for layout styles</Paragraph>
      <Syntax code={layoutProps} />
      <List
        data={['w: width', 'h: height', 'visibility: visibility', 'display: display']}
        higlightBefore=":"
      />
      <Header id="border">Border</Header>
      <Paragraph>Shorthand for border styles</Paragraph>
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

      <Header id="overrides">Overrides</Header>
      <Paragraph>
        Often you need to override component styles that depended on its internal state
        and properties. There are two places you can do this: theme and the style props.
      </Paragraph>
      <Header size="s">Syntax</Header>
      <Paragraph>
        For example Menu have two CSS classes for container and item elements. Here you
        describe styles for any of them. This styles applyed with their own styles of
        component.
      </Paragraph>
      <Syntax code={overridesExample} />

      <Header id="theming">Theming</Header>
      <Paragraph>
        StageUI contains two themes itself: Light and Dark. Light setup by default. Any
        others theme icludes user created pass on the theme prop of Viewport component.
        There's three section to describe a theme: main, assets and overrides. To create
        theme use createTheme function or import any other theme and just .replace() it
      </Paragraph>
      <Syntax code={theme} />
      <Header size="s">Main</Header>
      <Paragraph>
        Contains general variables of theme, like colors, radiuses and sizes
      </Paragraph>
      <Syntax code={main} />
      <Header size="s">Assets</Header>
      <Paragraph>
        There's all styles that uses between components. Assets must be discribed by the
        function which takes main varaibles for use eg colors in styles. Empty objects
        here are filled by analogy.
      </Paragraph>
      <Syntax code={assets} />
      <Header size="s">Overrides</Header>
      <Paragraph>
        All components have special styled system, that can be overriden from theme and
        styles prop.
      </Paragraph>
      <Syntax code={overrides} />
    </Block>
  )
}
