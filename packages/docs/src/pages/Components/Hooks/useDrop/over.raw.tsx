import React from 'react'

import { Button, useDropOver } from '@stage-ui/core'

export default () => {
  const { onMouseOver, onMouseLeave, onMouseMove } = useDropOver('Simple hint')

  return (
    <Button
      label="Hover to display hint"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  )
}
