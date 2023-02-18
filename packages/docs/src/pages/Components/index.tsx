import React, { useState } from 'react'

import { Block, Flexbox, Paragraph, TextField } from '@stage-ui/core'
import { createID, useTheme } from '@stage-ui/system'

import { Outlet, useNavigate } from 'react-router-dom'

import { Search } from '@stage-ui/icons'

import { CardPreview } from '@/components/CardPreview'
import core, { PagesType } from '@/utils/core'

function Components() {
  const { pages } = core
  const navigate = useNavigate()
  const theme = useTheme()
  const [search, setSearch] = useState('')
  const foundedPages: PagesType = {}
  Object.keys(pages).forEach((sectionKey) => {
    foundedPages[sectionKey] = pages[sectionKey].filter((page) =>
      page.title.toLowerCase().includes(search.toLowerCase()),
    )
  })
  return (
    <Flexbox column>
      <TextField
        decoration="none"
        leftChild={<Search size="1.5rem" />}
        placeholder="Find component"
        p="0"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox column alignItems="flex-start">
        {Object.keys(foundedPages).map((pageName) => {
          if (foundedPages[pageName].length === 0) {
            return null
          }
          return (
            <Block key={createID()}>
              <Paragraph weight={600} size="s" color="gray500" mt="2rem" mb="0.5rem">
                {pageName}
              </Paragraph>
              <Flexbox wrap="wrap">
                {foundedPages[pageName].map((page) => (
                  <CardPreview
                    key={page.id}
                    label={page.title}
                    glyph={
                      page.glyph ? (
                        <page.glyph
                          css={{
                            fill: theme.color.onSurface.alpha(0.9).string(),
                            width: '2rem',
                            height: '2rem',
                            transition: 'all 0.125s',
                          }}
                        />
                      ) : null
                    }
                    onClick={() => {
                      navigate(page.url)
                    }}
                  />
                ))}
              </Flexbox>
            </Block>
          )
        })}
      </Flexbox>
      <Outlet />
    </Flexbox>
  )
}

export default Components
