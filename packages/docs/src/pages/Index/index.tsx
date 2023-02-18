/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Header, Paragraph } from '@stage-ui/core'

import ViewportCode from './viewport.raw?raw'
import styleProp from './styleProp.raw?raw'
import colorProps from './colorProps.raw?raw'
import spacingProps from './spacingProps.raw?raw'
import flexGridProps from './flexGridProps.raw?raw'
import positionProps from './positionProps.raw?raw'
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
      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']}>
        Getting started
      </Header>
      <Syntax code="npm i @stage-ui/core" />
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        To use StageUI components, begin by adding the 'Viewport' component at the top
        level of your application. This component provides a theme to all StageUI
        components, applies a Reset CSS, and includes other useful configurations.
      </Paragraph>
      <Syntax code={ViewportCode} />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']}>
        Breakpoints
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        Many props that apply styles to a component, such as padding, margin, or
        backgroundColor, support an array notation where the value of each index matches
        with a max-width media query breakpoint. Use the '*' character to repeat the
        previous value, which makes responsive design much easier and more compact. Each
        prop below (except 'overrides') supports this notation.
      </Paragraph>
      <Syntax code={breakpoints} />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']}>
        Style
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        This prop is similar to the corresponding attribute in HTML, but it applies styles
        to the classname of the component's root element.
      </Paragraph>
      <Syntax code={styleProp} />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']}>
        Overrides
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        The 'overrides' prop is similar to the 'style' prop, but it allows you to specify
        styles for each element of the component. If they match existing styles in the
        current class, they will be overridden. This is the only style prop that cannot be
        specified as an array of breakpoints."
      </Paragraph>
      <Syntax code={overridesProp} />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']}>
        Color
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        All colors described in the StageUI theme become objects with useful functions
        that can transform the color's brightness, hue, retrieve RGB or HEX notation, and
        much more. This prop receives a function that provides all theme colors in one
        argument, a string corresponding to the color name, or a simple CSS color value.
      </Paragraph>
      <Syntax code={colorProps} />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="margin-padding">
        Margin and Padding
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        This is a shorthand for margin and padding styles with size aliases from the theme
        spacing.
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
        highlightBefore=":"
      />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="flex-grid">
        Flexbox and grid
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        Shorthand for flexbox and grid children styles
      </Paragraph>
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
        highlightBefore=":"
      />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="margin-padding">
        Position
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        Shorthand for position styles with size alias from theme spacing
      </Paragraph>
      <Syntax code={positionProps} />
      <List data={['t: top', 'l: left', 'r: right', 'b: bottom']} highlightBefore=":" />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="layout">
        Layout
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        Shorthand for layout styles
      </Paragraph>
      <Syntax code={layoutProps} />
      <List
        data={['w: width', 'h: height', 'visibility: visibility', 'display: display']}
        highlightBefore=":"
      />
      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="border">
        Border
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        This is a shorthand for borders styles.
      </Paragraph>
      <Syntax code={borderProps} />
      <List
        data={[
          'borderWidth: border-width',
          'borderStyle: border-style',
          'borderColor: border-color',
          'borderRadius: border-radius',
        ]}
        highlightBefore=":"
      />

      <Header mt="3rem" size={['xl', 'xl', 'xl', 'l']} id="theming">
        Theming
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        StageUI has two built-in themes: Light and Dark. By default, the theme is set to
        'auto', which means it will be automatically selected based on the system
        preferences. To specify a different theme, you can pass the theme name to the
        'Viewport' theme prop. If you want to create a new theme, you can either use the
        'replace' method to modify an existing theme, or start from scratch using the
        'createTheme' function. A theme has three sections that you can modify: 'main',
        'assets', and 'overrides'.
      </Paragraph>
      <Syntax code={theme} />

      <Header size="l" mt="xl">
        Main
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        Contains general variables of theme.
      </Paragraph>
      <Syntax code={main} />

      <Header size="l" mt="xl">
        Assets
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        This is a place for all styles that are used between components. Assets must be
        described by a function that takes main variables for use, such as colors. The
        empty objects in the example below should be filled accordingly.
      </Paragraph>
      <Syntax code={assets} />

      <Header size="l" mt="xl">
        Overrides
      </Header>
      <Paragraph fontSize={['1.375rem', '1.375rem', '1.375rem', '1rem']} lineHeight={1.4}>
        All components have a special styled system that can be overridden by the theme
        and styles prop."
      </Paragraph>
      <Syntax code={overridesTheme} mb={0} />
    </Block>
  )
}
