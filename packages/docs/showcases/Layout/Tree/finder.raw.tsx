import React from 'react'
import { Block, Tree } from '@stage-ui/core'

export default () => {
  return (
    <Block decoration="surface" overflow="hidden">
      <Tree label="root" decoration="finder">
        <Tree label="var">
          <Tree label="log">
            <Tree label="system.log" />
          </Tree>
        </Tree>
        <Tree label="etc">
          <Tree label="hosts" />
          <Tree label="passwd" />
          <Tree label="sudoers" />
        </Tree>
      </Tree>
    </Block>
  )
}
