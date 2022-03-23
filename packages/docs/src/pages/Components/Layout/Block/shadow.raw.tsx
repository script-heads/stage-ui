import React from 'react'
import { Grid, Block } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="2rem" textColor="hardest">
      <Block shadow="xs" p="m">
        Our shadows have 5 layers for each Stage.Size for best effect
      </Block>
      <Block shadow="m" backgroundColor="surface" borderRadius="m" p="m">
        Better use shadows with surface color and add some radius for better look
      </Block>
    </Grid>
  )
}
