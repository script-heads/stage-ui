import React from 'react'

import { Grid, Switch } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Switch label="Primary (default)" checked />
      <Switch color="red500" label="Red" checked />
      <Switch color={(c) => c.success} label="Success" checked />
    </Grid>
  )
}
