import { Block, Flexbox, TextField } from '@stage-ui/core'
import { CustomPageProps } from '@stage-ui/docs/utils/core'
import { Search } from '@stage-ui/icons'
import React, { useState } from 'react'
import Item from './Item'

const ShowcaseLayout = (props: CustomPageProps) => {
  const [search, setSearch] = useState('')

  return (
    <Flexbox column>
      <TextField
        placeholder="Find"
        w="8rem"
        mb="l"
        rightChild={<Search />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flexbox column alignItems="flex-start" pb="4rem" css={{ gap: '1rem' }}>
        {Object.keys(props.pages)
          .filter((pk) => {
            if (search) {
              return (
                props.pages[pk].findIndex((page) => {
                  if (RegExp(search.toLowerCase()).exec(page.title.toLowerCase())) {
                    return true
                  }
                  return false
                }) >= 0
              )
            }
            return true
          })
          .map((pageCode) => {
            return (
              <Block key={pageCode}>
                {/* <Text size="s" color="light" weight={600} pl="xl">
              {pageCode}
            </Text> */}
                <Flexbox wrap="wrap" css={{ gap: '1rem' }}>
                  {props.pages[pageCode]
                    .filter((key) => {
                      if (!!search && !RegExp(search.toLowerCase()).exec(key.title.toLowerCase())) {
                        return false
                      }
                      return true
                    })
                    .map((item) => {
                      return <Item key={item.id} page={item} setPath={props.setPath} />
                    })}
                </Flexbox>
              </Block>
            )
          })}
      </Flexbox>
    </Flexbox>
  )
}

export default ShowcaseLayout
