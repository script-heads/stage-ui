/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Header, Paragraph } from '@stage-ui/core'

import basic from './basic.raw?raw'
import angle from './angle.raw?raw'
import color from './color.raw?raw'
import repeating from './repeating.raw?raw'

export const title = 'createGradient'
export { ReactComponent as glyph } from './Gradient.svg'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Angle', code: angle },
  { label: 'Color', code: color },
  { label: 'Repeating', code: repeating },
]

export default () => (
  <Block p="m">
    <Paragraph mt="m">
      If you're building a website or web application, you may want to add some visual
      flair with gradients. Gradients are a way to create a smooth transition between two
      or more colors, giving your design depth and texture. This utility generates CSS
      gradients from input variables, making it easy to customize your gradients and reuse
      them throughout your project.
    </Paragraph>
    <Paragraph mt="m">
      The utility can take a variety of input variables to generate a gradient, including
      colors, position angle, gradient type, and whether the gradient should repeat.
    </Paragraph>
    <Header size="s"> Here's an overview of the options:</Header>
    <Paragraph>
      colors - The utility can take an array of colors as input, and will create a
      gradient that transitions between them. Colors also can be Stage.Color from active
      theme on Viewport.
    </Paragraph>
    <Paragraph mt="m">
      angle - This option sets the angle of the gradient. It can be either a number (which
      will be converted to a percentage), or a string that includes a unit of measurement
      such as "px" or "rem". This option only works for linear gradients. pattern.
    </Paragraph>
    <Paragraph mt="m">
      type - There are three types of gradients that the utility can generate: linear,
      radial, and conic. By default, the utility will generate a linear gradient.
    </Paragraph>
    <Paragraph mt="m">
      repeating - If this option is set to true, the gradient will repeat itself, creating
      a seamless
    </Paragraph>
  </Block>
)
