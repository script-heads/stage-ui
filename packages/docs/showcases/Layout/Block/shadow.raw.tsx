import React from 'react'
import { Grid, Block } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem" textColor="hardest">
      <Block shadow="xs" p="m">
        Shadows can be Stage.Size or css box-shadow string
      </Block>
      <Block shadow="s" backgroundColor="surface" p="m">
        better user it with surface color
      </Block>
      <Block shadow="m" backgroundColor="surface" borderRadius="m" p="m">
        then add some border radius
      </Block>
      <Block shadow="l" backgroundColor="surface" borderRadius="m" p="m">
        more shadow more cool looking blocks
      </Block>
    </Grid>
  )
}
