import React, { useState } from 'react'

import { Grid } from '@stage-ui/core'
import { ArrowIosUp } from '@stage-ui/icons'

export default () => {
  const [deg, setDegree] = useState(0)
  return (
    <Grid decoration="surface" gap="1rem" p="xl">
      <ArrowIosUp
        shape="oval"
        color={(c) => c.onPrimary}
        background="primary"
        size="2rem"
        rotate={deg}
        onClick={() => {
          setDegree(deg ? 0 : 90)
        }}
      />
    </Grid>
  )
}
