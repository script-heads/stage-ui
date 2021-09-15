import { Flexbox, TextField, notify, Text, useTheme } from '@stage-ui/core'
import { Search } from '@stage-ui/icons'
import * as AllIcons from '@stage-ui/icons'
import React, { useState } from 'react'

export const title = 'Collection'

export default () => {
  const theme = useTheme()
  const [search, setSearch] = useState('')
  return (
    <Flexbox column>
      <TextField
        placeholder="Find by name"
        w="12rem"
        mb="l"
        rightChild={<Search />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox wrap="wrap" pb="4rem" css={{ gap: '1rem' }}>
        {Object.keys(AllIcons)
          .filter((key) => {
            if (!!search && !RegExp(search.toLowerCase()).exec(key.toLowerCase())) {
              return false
            }
            return true
          })
          .map((key) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const PreviewIcon = AllIcons[key]
            return (
              <Flexbox
                key={key}
                column
                alignItems="center"
                p="m"
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
                  boxShadow: theme.assets.shadow.xs,
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
                <Flexbox pb="s">
                  <PreviewIcon
                    type="filled"
                    size="2.75rem"
                    attributes={{ 'data-id': 'filled' }}
                    css={{ display: 'none' }}
                  />
                  <PreviewIcon
                    color="hardest"
                    type="outline"
                    size="2.75rem"
                    attributes={{ 'data-id': 'outline' }}
                  />
                </Flexbox>
                <Text weight={500} color="hardest" p="s">
                  {key}
                </Text>
              </Flexbox>
            )
          })}
      </Flexbox>
    </Flexbox>
  )
}
