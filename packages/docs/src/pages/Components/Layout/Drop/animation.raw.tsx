import React, { useRef, useState } from 'react'

import { Drop, Button, Popover, Flexbox } from '@stage-ui/core'

export default () => {
  const [state, setState] = useState(false)
  const ref = useRef(null)

  return (
    <Flexbox centered py="5rem" decoration="surface" backgroundColor="background">
      <Button
        decoration="text"
        ref={ref}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        label="Hover"
      />
      <Drop
        visible={state}
        target={ref}
        spacing={8}
        justify="center"
        animation={{
          type: 'pop',
          duration: 250,
          reverse: true,
        }}
      >
        <Popover>Hello world!</Popover>
      </Drop>
    </Flexbox>
  )
}
