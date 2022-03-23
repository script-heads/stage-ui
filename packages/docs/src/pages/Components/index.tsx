import React, { useState } from 'react'

import { Flexbox, TextField } from '@stage-ui/core'
import { Search } from '@stage-ui/icons'
import createID from '@stage-ui/system/utils/createID'

import { Outlet } from 'react-router-dom'

import Preview from '@/components/Preview'
import core, { PagesType } from '@/utils/core'

function Components() {
  const { pages } = core
  const [search, setSearch] = useState('')
  const findedPages: PagesType = {}
  Object.keys(pages).forEach((sectionKey) => {
    findedPages[sectionKey] = pages[sectionKey].filter((page) =>
      page.title.toLowerCase().includes(search.toLowerCase()),
    )
  })

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
      <Flexbox column alignItems="flex-start" pb="4rem" css={{ gap: '1rem' }}>
        {Object.values(findedPages).map((section) => (
          <Flexbox key={createID()} wrap="wrap" css={{ gap: '1rem' }}>
            {section.map((page) => (
              <Preview key={page.id} page={page} />
            ))}
          </Flexbox>
        ))}
      </Flexbox>
      <Outlet />
    </Flexbox>
  )
}

export default Components
