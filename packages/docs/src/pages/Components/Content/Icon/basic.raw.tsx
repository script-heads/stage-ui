import React from 'react'

import { Grid } from '@stage-ui/core'
import { Clock } from '@stage-ui/icons'

export default () => {
  return (
    <Grid decoration="surface" gap="1rem" p="xl">
      <Clock size="4rem" />
      <Clock size="4rem" type="filled" />
    </Grid>
  )
}
