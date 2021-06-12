import { Block, Text } from '@stage-ui/core'
import React from 'react'

export default () => {
  return (
    <Block mb="4rem">
      <Text color="light" size="s">
        © Project One Team 2020-{new Date().getFullYear()}
      </Text>
    </Block>
  )
}
