import React from 'react'

import { Button, Grid } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Button label="Default filled" />
      <Button decoration="outline" label="Outline decoration" />
      <Button decoration="plain" label="Plain decoration" />
      <Button decoration="text" label="Text decoration" />
    </Grid>
  )
}
