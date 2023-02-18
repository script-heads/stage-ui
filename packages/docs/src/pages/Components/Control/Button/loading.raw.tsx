import React from 'react'

import { Button, Grid, notify } from '@stage-ui/core'

export default () => {
  const onAsyncLoading = (): Promise<void> => {
    return new Promise((resolve) => {
      notify({
        title: 'Button',
        message: 'Loading start',
        timeout: 1000,
      })
      setTimeout(() => {
        notify({
          title: 'Button',
          message: 'Loading complete!',
          timeout: 1000,
        })
        resolve()
      }, 1000)
    })
  }

  return (
    <Grid gap="1rem">
      <Button w="8rem" label="Click to load" onClick={onAsyncLoading} />
    </Grid>
  )
}
