import React from 'react'
import { Block, Flexbox, Text } from '@stage-ui/core'

const Footer = () => (
  <Flexbox column alignItems="center" p="xl" mt="xl" backgroundColor="lightest">
    <Block css={{ maxWidth: '64rem', width: '100%' }}>
      <Text size="s" color="hardest">
        MIT 2019-{new Date().getFullYear()} Script Heads.
      </Text>
    </Block>
  </Flexbox>
)

export default Footer
