import React from 'react'

import { Grid } from '@stage-ui/core'
import { Cube, Archive } from '@stage-ui/icons'

export default () => {
  return (
    <Grid decoration="surface" gap="1rem" p="xl">
      <Cube shape="oval" color={(c) => c.onPrimary} background="primary" size="2rem" />
      <Archive shape="circle" color="primary" size="2rem" />
    </Grid>
  )
}
