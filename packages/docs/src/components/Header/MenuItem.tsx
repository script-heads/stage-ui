import React from 'react'

import { Text } from '@stage-ui/core'

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
    <Text
      p="0"
      mr={['2rem', '2rem', '2rem', '1rem']}
      color={active ? 'primary' : 'onSurface'}
      style={{
        transition: 'all 0.125s',
      }}
      size="l"
      weight={600}
      onClick={onClick}
    >
      {label}
    </Text>
  )
}

export default MenuItem
