/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

import { Flexbox, Text } from '@stage-ui/core'
import FlexboxTypes from '@stage-ui/core/layout/Flexbox/types'

export function Hotkey(props: FlexboxTypes.Props & { alt?: boolean }) {
  const { children, alt, ...restProps } = props
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const altLabel = window.navigator.userAgentData.platform === 'macOS' ? '⌥ + ' : 'Alt + '

  return (
    <Flexbox
      h="1.25rem"
      px="0.25rem"
      centered
      backgroundColor={(c) => c.onSurface.alpha(0.06)}
      style={{
        minWidth: '0.75rem',
        borderRadius: '0.25rem',
      }}
      {...restProps}
    >
      <Text color="gray500" size="xs">
        {alt ? altLabel : ''}
        {children}
      </Text>
    </Flexbox>
  )
}
