import React from 'react'

import { Block, Flexbox, Text } from '@stage-ui/core'

function Footer() {
  return (
    <Flexbox column alignItems="center" p="xl" mt="xl" backgroundColor="surface">
      <Block css={{ maxWidth: '64rem', width: '100%' }}>
        <Text size="s" color="onSurface">
          MIT 2019-{new Date().getFullYear()} Script Heads.
        </Text>
      </Block>
    </Flexbox>
  )
}

export default Footer
