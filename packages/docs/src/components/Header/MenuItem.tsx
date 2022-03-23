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
      mr="xl"
      color={active ? 'primary' : 'onBackground'}
      style={{
        transition: 'all 0.125s',
      }}
      weight={500}
      onClick={onClick}
    >
      {label}
    </Text>
  )
}

export default MenuItem
