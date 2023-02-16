import React from 'react'

import { Button, useDrop } from '@stage-ui/core'

export default () => {
  const onClick = useDrop('Simple text')

  return <Button label="Click to drop" onClick={onClick} />
}
