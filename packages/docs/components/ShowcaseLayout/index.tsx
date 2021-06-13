import React from 'react'
import { Block, Flexbox, Grid, Header } from '@stage-ui/core'
import { CustomPageProps } from '@stage-ui/docs/utils/core'
import Item from './Item'

const fr = (cnt: number) => `repeat(${cnt}, 1fr)`

const ShowcaseLayout = (props: CustomPageProps) => {
  return (
    <Flexbox column alignItems="center" pb="4rem">
      {Object.keys(props.pages).map((pageCode) => {
        return (
          <Block key={pageCode}>
            <Header size="s" color="hard">
              {pageCode}
            </Header>
            <Grid gap="1rem" templateColumns={[fr(6), fr(5), fr(4), fr(2)]}>
              {props.pages[pageCode].map((item) => {
                return <Item key={item.id} page={item} setPath={props.setPath} />
              })}
            </Grid>
          </Block>
        )
      })}
    </Flexbox>
  )
}

export default ShowcaseLayout
