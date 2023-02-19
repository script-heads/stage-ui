import React from 'react'

import { Button, Grid, Popover, Text } from '@stage-ui/core'
import { Info } from '@stage-ui/icons'

export default () => {
  return (
    <Grid gap="0.75rem">
      <Button label="Basic button" rightChild={<Info />} />
      <Popover
        w="8rem"
        h="4rem"
        align="top"
        shadow="xs"
        backgroundColor="white"
        arrowOffset="3rem"
        centered
      >
        <Text color="gray600">Basic popover</Text>
      </Popover>
    </Grid>
  )
}
