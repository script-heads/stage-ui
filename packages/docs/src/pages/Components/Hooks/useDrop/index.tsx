import React from 'react'

import { Block, Divider, Header, Paragraph } from '@stage-ui/core'

import basic from './basic.raw?raw'
import menu from './menu.raw?raw'
import custom from './custom.raw?raw'
import over from './over.raw?raw'

export { ReactComponent as glyph } from './useDrop.svg'

export const title = 'useDrop'
export const cases = [
  { label: 'Basic usage', code: basic },
  { label: 'Menu context', code: menu },
  { label: 'All custom', code: custom },
  { label: 'Mouse over', code: over },
]

export default () => (
  <Block p="m">
    <Paragraph>
      These hooks are designed to display popup content, such as tooltips, hints, or even
      complex views with controls and scroll areas in the most optimized way possible. The
      cool thing is that, no matter how many hooks you create in your app, the Viewport
      will control what content should be displayed right now, and the DOM will only
      contain the one that needs to be displayed to the user.
    </Paragraph>
    <Divider mt="l" />
    <Header size="s">useDrop</Header>
    <Paragraph>
      This hook is designed to display anything when a user clicks something. This hook
      will return an onClick handler, and when the function is called, the view that you
      provide to the hook will automatically be displayed on the screen, and the
      coordinates will be used from the cursor click event.
    </Paragraph>
    <Divider mt="l" />
    <Header size="s">useDropMenu</Header>
    <Paragraph>
      This hook is designed specifically to display user menus, such as context menus or
      dropdown menus. You need to provide an array of menu items to this hook, each of
      which has configuration parameters like the label of the menu and an onClick
      handler.
    </Paragraph>
    <Divider mt="l" />
    <Header size="s">useDropOver</Header>
    <Paragraph>
      This hook works almost the same as useDrop, but it will return an object with
      onMouseOver, onMouseUp, and onMouseMove handlers that can be spread directly to the
      component where you want to display the view when the user hovers over it.
    </Paragraph>
  </Block>
)
