import React from 'react'
import { Toggle } from '@stage-ui/core'

export default () => (
  <Toggle
    defaultValue={{ text: 'Yes', value: 1 }}
    options={[
      { text: 'No', value: 0 },
      { text: 'Yes', value: 1 },
      { text: 'Maybe', value: 2 },
    ]}
  />
)
