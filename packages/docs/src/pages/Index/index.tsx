/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Header, Paragraph } from '@stage-ui/core'

import ViewportCode from './viewport.raw?raw'
import styleProp from './styleProp.raw?raw'
import colorProps from './colorProps.raw?raw'
import spacingProps from './spacingProps.raw?raw'
import flexGridProps from './flexGridProps.raw?raw'
import layoutProps from './layoutProps.raw?raw'
import borderProps from './borderProps.raw?raw'
import theme from './theme.raw?raw'
import main from './main.raw?raw'
import assets from './assets.raw?raw'
import overridesTheme from './overridesTheme.raw?raw'
import overridesProp from './overridesProp.raw?raw'
import breakpoints from './breakpoints.raw?raw'

import List from '@/components/List'
import Syntax from '@/components/Syntax'

export const title = 'Getting started'
export const sticky = true

export default function Index() {
  return (
    <Block>
      <Header size="xl">Getting started</Header>
      <Syntax code="npm i @stage-ui/core" />
      <Paragraph size="xl">
        Use Viewport component at the top level of your application. It provide theme to
        all StageUI components, apply some Reset CSS and had another useful
        configurations.
      </Paragraph>
      <Syntax code={ViewportCode} />

      <Header size="xl">
        Breakpoints
      </Header>
      <Paragraph size="xl">
        All props what apply certain style to component, like padding, margin or
        backgroundColor suport array notation where value of each index is match with
        max-width media query breakpoint. Use "*" character to repeat previous value. It
        makes resposive design much more easier and compact. Each props below except
        overrides support this.
      </Paragraph>
      <Syntax code={breakpoints} />

      <Header size="xl">
        Style
      </Header>
      <Paragraph size="xl">
        This prop is like corresponding attribute in HTML, but apply these styles to
        classname of components root element.
      </Paragraph>
      <Syntax code={styleProp} />

      <Header size="xl">
        Overrides
      </Header>
      <Paragraph size="xl">
        Like style prop, but there you able to specify styles to each elements of
        component. If they are matching existing styles in current class they will be
        overrided. It just one style prop what cant be specify as array of breakpoints.
      </Paragraph>
      <Syntax code={overridesProp} />

      <Header size="xl">
        Color
      </Header>
      <Paragraph size="xl">
        All colors described in StageUI theme turn into Objects with useful functions that
        can transform colors brightness, hue, get rgb or hex notation and much more useful
        parametrs. This props recive function what provide all theme colors in one
        argument, a string corresponding to the color name or a simple CSS color value.
      </Paragraph>
      <Syntax code={colorProps} />

      <Header size="xl" id="margin-padding">
        Margin and Padding
      </Header>
      <Paragraph size="xl">
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
          'mx: margin-left/right',
          'my: margin-top/bottom',
          'p : padding',
          'pt: padding-top',
          'pr: padding-right',
          'pb: padding-bottom',
          'pl: padding-left',
          'px: padding-left/right',
          'py: padding-top/bottom',
        ]}
        higlightBefore=":"
      />

      <Header size="xl" id="flex-grid">
        Flexbox and grid
      </Header>
      <Paragraph size="xl">Shorthand for flexbox and grid children styles</Paragraph>
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

      <Header size="xl" id="layout">
        Layout
      </Header>
      <Paragraph size="xl">Shorthand for layout styles</Paragraph>
      <Syntax code={layoutProps} />
      <List
        data={['w: width', 'h: height', 'visibility: visibility', 'display: display']}
        higlightBefore=":"
      />
      <Header size="xl" id="border">
        Border
      </Header>
      <Paragraph size="xl">Shorthand for border styles</Paragraph>
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

      <Header size="xl" id="theming">Theming</Header>
      <Paragraph size="xl">
        StageUI contains two themes by itself: Light and Dark. Light is default. Any theme
        passs into Viewports theme prop. For create new theme you can use replace method
        from existing theme and just override some values or make theme from scratch. If
        you choose this way use createTheme function. Theme has three section to describe:
        main, assets and overrides.
      </Paragraph>
      <Syntax code={theme} />

      <Header size="l">Main</Header>
      <Paragraph size="xl">Contains general variables of theme.</Paragraph>
      <Syntax code={main} />

      <Header size="l">Assets</Header>
      <Paragraph size="xl">
        Place for all styles that uses between components. Assets must be discribed by the
        function which takes main varaibles for use eg colors. Empty objects in exaple
        below are filled by analogy.
      </Paragraph>
      <Syntax code={assets} />

      <Header size="l">Overrides</Header>
      <Paragraph size="xl">
        All components have special styled system, that can be overriden from theme and
        styles prop.
      </Paragraph>
      <Syntax code={overridesTheme} mb={0} />
    </Block>
  )
}
