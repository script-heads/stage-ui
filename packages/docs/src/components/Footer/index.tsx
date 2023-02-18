import React from 'react'

import { Block, Flexbox, Text } from '@stage-ui/core'
import { Github } from '@stage-ui/icons'

function Footer() {
  return (
    <Flexbox
      centered
      flex={1}
      p="1rem 2rem"
      mt="4rem"
      mb="2rem"
      borderRadius="m"
      backgroundColor={(c) => c.onSurface.alpha(0.05).string()}
    >
      <Block css={{ maxWidth: '64rem', width: '100%' }}>
        <Text weight={500} size="s" color={(c) => c.onSurface.alpha(0.5).string()}>
          MIT 2019-{new Date().getFullYear()} Script Heads.
        </Text>
      </Block>
      <Github
        gridArea="git"
        size="2rem"
        color={(c) => c.onSurface.alpha(0.75).string()}
        onClick={() => window.open('https://github.com/script-heads/stage-ui', '_blank')}
      />
    </Flexbox>
  )
}

export default Footer
