import React from 'react'

import { Grid, Switch } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Switch size="m" label="Round (default)" />
      <Switch size="m" shape="rounded" label="Rounded" />
      <Switch size="m" shape="square" label="Square" />
    </Grid>
  )
}
