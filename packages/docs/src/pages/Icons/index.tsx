import React, { useState } from 'react'

import { Flexbox, notify, TextField } from '@stage-ui/core'
import * as AllIcons from '@stage-ui/icons'

import { CardPreview } from '@/components/CardPreview'

export const title = 'Collection'

function IconsPage() {
  const [search, setSearch] = useState('')
  const handleCopy = (key: string) => {
    const el = document.createElement('textarea')
    el.value = `import ${key} from '@stage-ui/icons/lib/${key}'`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    notify({
      title: 'Icons',
      message: `${key} copyed to clipboard`,
      timeout: 3000,
    })
  }
  return (
    <>
      <TextField
        decoration="none"
        leftChild={<AllIcons.Search size="1.5rem" />}
        placeholder="Find icon"
        p="0"
        mb="3.75rem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox wrap="wrap">
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
              <CardPreview
                key={key}
                label={key}
                glyph={<PreviewIcon size="2rem" />}
                onClick={() => {
                  handleCopy(key)
                }}
              />
            )
          })}
      </Flexbox>
    </>
  )
}

export default IconsPage
