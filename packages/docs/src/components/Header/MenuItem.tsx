import React from 'react'

import { Block, Text } from '@stage-ui/core'

function MenuItem({
  active,
  label,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <Block
      p="s m"
      borderRadius="0.75rem"
      mr={['0.125rem']}
      style={{
        transition: 'all 0.125s',
      }}
      backgroundColor={(c) => (active ? c.onSurface.alpha(0.05) : c.onSurface.alpha(0))}
    >
      <Text
        color={(c) => (active ? 'onSurface' : c.onSurface.alpha(0.5))}
        style={{
          transition: 'all 0.125s',
        }}
        weight={600}
        onClick={onClick}
      >
        {label}
      </Text>
    </Block>
  )
}

export default MenuItem
