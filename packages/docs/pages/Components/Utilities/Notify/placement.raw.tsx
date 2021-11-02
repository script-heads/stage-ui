import { Button, notify } from '@stage-ui/core'
import React from 'react'

export default () => {
  const handleClick = () =>
    notify({
      title: 'Hello again',
      message: "I'm down here",
      timeout: 3000,
      placement: 'bottomLeft',
    })
  return <Button label="Push" onClick={handleClick} />
}
