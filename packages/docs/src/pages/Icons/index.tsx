import React, { useState } from 'react'

import { Flexbox, TextField, notify, Text, useTheme } from '@stage-ui/core'
import * as AllIcons from '@stage-ui/icons'

export const title = 'Collection'

function IconsPage() {
  const theme = useTheme()
  const [search, setSearch] = useState('')
  return (
    <>
      <TextField
        size="xl"
        ml={[0, 0, 0, '2rem']}
        decoration="underline"
        leftChild={<AllIcons.Search size="1.5rem" />}
        placeholder="Find by name"
        w="100%"
        mb="l"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox wrap="wrap" css={{ gap: '1rem' }}>
        {Object.keys(AllIcons)
          .filter((key) => {
            if (!!search && !RegExp(search.toLowerCase()).exec(key.toLowerCase())) {
              return false
            }
            return true
          })
          .map((key) => {
            const PreviewIcon = AllIcons[key as keyof typeof AllIcons]
            return (
              <Flexbox
                key={key}
                column
                alignItems="center"
                p="m s"
                w="10rem"
                borderRadius="1rem"
                onClick={() => {
                  const el = document.createElement('textarea')
                  el.value = `import ${key} from '@stage-ui/icons/lib/${key}`
                  document.body.appendChild(el)
                  el.select()
                  document.execCommand('copy')
                  document.body.removeChild(el)
                  notify({
                    title: 'Icons',
                    message: `${key} copyed to clipboard`,
                    timeout: 3000,
                  })
                }}
                css={{
                  flexDirection: 'column',
                  transition: 'all 0.125s',
                  backgroundColor: theme.color.surface.rgb().string(),
                  ':hover': {
                    transform: 'scale(1.1)',
                    boxShadow: theme.assets.shadow.xl,
                    zIndex: 100,
                    '[data-id="filled"]': {
                      display: 'block',
                    },
                    '[data-id="outline"]': {
                      display: 'none',
                    },
                  },
                }}
              >
                <Flexbox pb="m">
                  <PreviewIcon
                    type="filled"
                    size="2rem"
                    attributes={{ 'data-id': 'filled' }}
                    css={{ display: 'none' }}
                  />
                  <PreviewIcon
                    type="outline"
                    size="2rem"
                    attributes={{ 'data-id': 'outline' }}
                  />
                </Flexbox>
                <Text mt="m" size="s" weight={500} color={(c) => c.onSurface.alpha(0.6)}>
                  {key}
                </Text>
              </Flexbox>
            )
          })}
      </Flexbox>
    </>
  )
}

export default IconsPage
