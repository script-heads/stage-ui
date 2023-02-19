import React from 'react'

import { Grid, Block } from '@stage-ui/core'

export default () => {
  return (
    <Grid templateColumns="50% 50%">
      <Block decoration="surface" p="1rem" m="0.125rem">
        Alice
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Bob
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Baker
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Clark
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Mason
      </Block>
      <Block decoration="surface" p="1rem" m="0.125rem">
        Smith
      </Block>
    </Grid>
  )
}
