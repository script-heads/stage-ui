import React from 'react'

import { Button, useDropOver } from '@stage-ui/core'

export default () => {
  const { onMouseOver, onMouseLeave, onMouseMove } = useDropOver('Simple hint', {
    pointerEvents: false,
  })

  return (
    <Button
      decoration="plain"
      label="Show hint"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  )
}
