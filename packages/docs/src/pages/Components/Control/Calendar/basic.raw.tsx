import React from 'react'

import { Block, Calendar, Grid } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1rem">
      <Block p="m" decoration="mediumShadow" w="16rem">
        <Calendar hideToday type="day" />
      </Block>
    </Grid>
  )
}
