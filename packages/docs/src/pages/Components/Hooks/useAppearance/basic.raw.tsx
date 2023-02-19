import React from 'react'

import { Block, Paragraph, useAppearance } from '@stage-ui/core'

export default () => {
  const appearance = useAppearance()

  return (
    <Block decoration="surface" p="m">
      <Paragraph weight={600}>
        Your appearance is currently set to {appearance} mode.
      </Paragraph>
      <Paragraph size="s" color="gray500">
        To change the appearance, you will need to change the system theme. Once you
        change the system theme, the appearance of your system will also change
        accordingly.
      </Paragraph>
    </Block>
  )
}
