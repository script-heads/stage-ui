import { Block, Flexbox } from '@stage-ui/core'
import { CustomPageProps } from '@stage-ui/docs/utils/core'
import React from 'react'
import Item from './Item'

const ShowcaseLayout = (props: CustomPageProps) => {
  return (
    <Flexbox column alignItems="flex-start" pb="4rem" css={{ gap: '1rem' }}>
      {Object.keys(props.pages).map((pageCode) => {
        return (
          <Block key={pageCode}>
            {/* <Text size="s" color="light" weight={600} pl="xl">
              {pageCode}
            </Text> */}
            <Flexbox wrap="wrap" css={{ gap: '1rem' }}>
              {props.pages[pageCode].map((item) => {
                return <Item key={item.id} page={item} setPath={props.setPath} />
              })}
            </Flexbox>
          </Block>
        )
      })}
    </Flexbox>
  )
}

export default ShowcaseLayout
