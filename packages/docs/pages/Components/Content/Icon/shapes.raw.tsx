import { Cube, Archive } from '@stage-ui/icons'
import React from 'react'

export default () => {
  return (
    <>
      <Cube shape="oval" color={(c) => c.onPrimary} background="primary" size="2rem" />
      <Archive shape="circle" color="primary" size="2rem" ml=".5rem" />
    </>
  )
}
