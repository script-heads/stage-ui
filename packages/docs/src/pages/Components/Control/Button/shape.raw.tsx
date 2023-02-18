import React from 'react'

import { Button, Grid } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Button label="Default rounded" />
      <Button shape="round" label="Round shape" />
      <Button shape="square" label="Square shape" />
    </Grid>
  )
}
