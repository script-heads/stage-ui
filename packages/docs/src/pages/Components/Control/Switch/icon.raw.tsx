import React, { useState } from 'react'

import { Grid, Switch } from '@stage-ui/core'
import { Bell, BellOff } from '@stage-ui/icons'

export default () => {
  const [check, setCheck] = useState(true)
  return (
    <Grid gap="1rem">
      <Switch
        checked={check}
        onChange={() => setCheck(!check)}
        label={check ? 'Unmute' : 'Mute'}
        iconChild={check ? <BellOff /> : <Bell />}
      />
    </Grid>
  )
}
