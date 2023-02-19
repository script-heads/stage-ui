import React from 'react'

import { Tree } from '@stage-ui/core'

export default () => {
  return (
    <Tree label="Root">
      <Tree label="Level 1">
        <Tree label="Item 1" />
        <Tree label="Item 2" />
      </Tree>
    </Tree>
  )
}
