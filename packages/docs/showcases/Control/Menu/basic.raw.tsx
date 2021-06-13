import { Menu } from '@stage-ui/core'
import React from 'react'

export default () => {
  return (
    <Menu
      defaultValue={0}
      decoration="marker"
      backgroundColor={(c) => c.surface}
      data={['Video', 'Music', 'News']}
    />
  )
}
