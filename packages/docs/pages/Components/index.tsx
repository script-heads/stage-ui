import React, { useState } from 'react'
import { Block, Flexbox, TextField } from '@stage-ui/core'
import { Search } from '@stage-ui/icons'
import Item from '../../components/ComponentPreview'
import core from '../../utils/core'

const Components = () => {
  const { pages } = core
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
      <Flexbox column alignItems="flex-start" pb="4rem" css={{ gap: '1rem' }}>
        {Object.keys(pages)
          .filter((pk) => {
            if (search) {
              return (
                pages[pk].findIndex((page) => {
                  if (RegExp(search.toLowerCase()).exec(page.title.toLowerCase())) {
                    return true
                  }
                  return false
                }) >= 0
              )
            }
            return true
          })
          .map((pageCode) => (
            <Block key={pageCode}>
              <Flexbox wrap="wrap" css={{ gap: '1rem' }}>
                {pages[pageCode]
                  .filter((key) => {
                    if (!!search && !RegExp(search.toLowerCase()).exec(key.title.toLowerCase())) {
                      return false
                    }
                    return true
                  })
                  .map((item) => (
                    <Item key={item.id} page={item} />
                  ))}
              </Flexbox>
            </Block>
          ))}
      </Flexbox>
    </Flexbox>
  )
}

export default Components
