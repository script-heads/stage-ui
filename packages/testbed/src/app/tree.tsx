import React from 'react'

import { Block, Tree } from '@stage-ui/core'

const PlaygroundTree = () => {
  const element = Tree({})
  return (
    <Block decoration="surface" overflow="hidden">
      <Tree defaultOpen label="root" decoration="finder">
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

export default PlaygroundTree
