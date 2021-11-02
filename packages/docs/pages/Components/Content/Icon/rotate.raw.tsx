import { ArrowIosUp } from '@stage-ui/icons'
import React, { useState } from 'react'

export default () => {
  const [deg, setDegree] = useState(0)
  return (
    <>
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
    </>
  )
}
