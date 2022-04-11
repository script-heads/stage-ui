import React from 'react'

import { Block, Flexbox, Text } from '@stage-ui/core'
import { Github } from '@stage-ui/icons'

function Footer() {
  return (
    <Flexbox centered p="xl" mt="xl" backgroundColor="onSurface">
      <Block css={{ maxWidth: '64rem', width: '100%' }}>
        <Text color="surface">MIT 2019-{new Date().getFullYear()} Script Heads.</Text>
      </Block>
      <Github
        gridArea="git"
        size="2rem"
        color="surface"
        onClick={() => window.open('https://github.com/script-heads/stage-ui', '_blank')}
      />
    </Flexbox>
  )
}

export default Footer
