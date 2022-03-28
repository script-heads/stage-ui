/* eslint-disable react/destructuring-assignment */
import React from 'react'

import { Block, Text, useTheme } from '@stage-ui/core'

function ColorPreview({ value, name }: { value: Stage.Color; name: string }) {
  const theme = useTheme()

  return (
    <Block
      borderRadius="s"
      w="6rem"
      h="3rem"
      mr="xs"
      mt="xs"
      p="s"
      backgroundColor={value}
    >
      <Text
        weight={600}
        size="xs"
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
