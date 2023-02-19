import React from 'react'

import { TextField } from '@stage-ui/core'

export default () => {
  return (
    <TextField
      key="textarea"
      multiline
      label="Code"
      defaultValue={'Test\nCode'}
      leftChildNumber={(index) => `${index + 1}.`}
    />
  )
}
