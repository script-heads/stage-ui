import React from 'react'

import { Grid, Switch } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Switch size="xs" label="Extra small" />
      <Switch size="s" label="Small" />
      <Switch size="m" label="Medium (default)" />
      <Switch size="l" label="Large" />
      <Switch size="xl" label="Extra large" />
    </Grid>
  )
}
