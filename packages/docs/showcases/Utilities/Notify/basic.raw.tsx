import { Button, notify } from '@stage-ui/core'
import React from 'react'

export default () => {
  const handleClick = () =>
    notify({
      title: 'Hello',
      message: "I'm notification displayed in right corner of your window",
      timeout: 3000,
    })
  return <Button label="Push" onClick={handleClick} />
}
