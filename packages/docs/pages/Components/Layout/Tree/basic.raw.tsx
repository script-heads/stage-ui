import React from 'react'
import { Tree } from '@stage-ui/core'

export default () => {
  return (
    <Tree label="House">
      <Tree label="First floor">
        <Tree label="flat 1" />
        <Tree label="flat 2" />
      </Tree>
    </Tree>
  )
}
