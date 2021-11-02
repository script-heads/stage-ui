import { Grid, Toast } from '@stage-ui/core'
import { CloseCircle, CheckmarkCircle2, Info } from '@stage-ui/icons'
import React from 'react'

export default () => {
  return (
    <Grid gap="1rem">
      <Toast label="Infomation" rightChild={<Info />} />
      <Toast label="Success" color="success" rightChild={<CheckmarkCircle2 />} />
      <Toast label="Warning" color="warning" rightChild={<Info />} />
      <Toast label="Error" color="error" rightChild={<CloseCircle />} />
    </Grid>
  )
}
