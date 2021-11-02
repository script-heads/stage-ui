import React from 'react'
import { Grid, Block } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem" textColor="hardest">
      <Block decoration="surface" p="m">
        Surface
      </Block>
      <Block decoration="skeleton" p="m">
        Skeleton
      </Block>
    </Grid>
  )
}
