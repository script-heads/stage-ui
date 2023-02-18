import React from 'react'

import { Block, Paragraph, useAppearance } from '@stage-ui/core'

export default () => {
  const appearance = useAppearance()

  return (
    <Block decoration="surface" p="m">
      <Paragraph weight={600}>Your system appearance is {appearance}</Paragraph>
      <Paragraph size="s" color="gray500">
        Change system theme to change appearance
      </Paragraph>
    </Block>
  )
}
