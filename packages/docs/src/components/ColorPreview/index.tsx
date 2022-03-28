/* eslint-disable react/destructuring-assignment */
import React from 'react'

import { Block, Text, useTheme } from '@stage-ui/core'

function ColorPreview({ value, name }: { value: Stage.Color; name: string }) {
  const theme = useTheme()

  return (
    <Block
      w="8rem"
      h="4rem"
      mr="xs"
      mt="xs"
      p="s"
      backgroundColor={value}
    >
      <Text
        weight={600}
        color={
          value.contrast(theme.color.white) > 3 ? theme.color.white : theme.color.black
        }
      >
        {name}
      </Text>
    </Block>
  )
}

export default ColorPreview
