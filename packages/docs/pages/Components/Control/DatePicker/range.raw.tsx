import React from 'react'
import { DatePicker } from '@stage-ui/core'

export default () => (
  <DatePicker
    range
    defaultValue={[new Date(), new Date(new Date().getTime() + 86400000)]}
    type="day"
    format="YYYY-MM-DD"
    label="Please pick a date"
  />
)
