import React from 'react'
import { Grid, Popover } from '@stage-ui/core'

export default () => {
  return (
    <Grid gap="1.5rem">
      <Popover w="8rem" shadow="xs" h="2rem" />
      <Popover w="8rem" h="2rem" arrowOffset="3rem" />
      <Popover w="8rem" h="2rem" align="bottom" />
      <Popover w="8rem" h="4rem" align="right" arrowOffset="-1rem" />
    </Grid>
  )
}
