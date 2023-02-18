import React from 'react'

import { Button, Grid } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Button size="xs" label="Extra small" />
      <Button size="s" label="Small" />
      <Button size="m" label="Medium default" />
      <Button size="l" label="Large" />
      <Button size="xl" label="Extra large" />
    </Grid>
  )
}
