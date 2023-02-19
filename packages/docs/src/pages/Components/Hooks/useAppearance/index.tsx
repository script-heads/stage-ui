/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Block, Paragraph } from '@stage-ui/core'

import basic from './basic.raw?raw'

export { ReactComponent as glyph } from './useAppearance.svg'

export const title = 'useAppearance'
export const cases = [{ label: 'Basic usage', code: basic }]

export default () => (
  <Block p="m">
    <Paragraph>
      This hook is designed to detect changes in the system appearance and return the
      current state of it. Under the hood, there is a useEffect with a listener for //
      eslint-disable-next-line react/no-unescaped-entities matchMedia
      'prefers-color-scheme'. When the scheme changes, the hook is called.
    </Paragraph>
  </Block>
)
