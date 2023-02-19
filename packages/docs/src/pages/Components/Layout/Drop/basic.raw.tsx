import React, { useRef, useState } from 'react'

import { Drop, Button, Popover, Flexbox } from '@stage-ui/core'

export default () => {
  const [state, setState] = useState(false)
  const ref = useRef(null)
  const onClick = () => {
    setState(!state)
    if (!state) {
      setTimeout(() => {
        setState(false)
      }, 500)
    }
  }
  return (
    <Flexbox centered py="5rem" decoration="surface" backgroundColor="background">
      <Button ref={ref} onClick={onClick} label="Click" />
      <Drop visible={state} target={ref} spacing={8}>
        <Popover>Hello!</Popover>
      </Drop>
    </Flexbox>
  )
}
