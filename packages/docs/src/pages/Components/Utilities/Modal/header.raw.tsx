import React from 'react'

import { Button, Flexbox, modal } from '@stage-ui/core'

export default () => {
  const handleClick = () => {
    modal({
      title: 'Modal view',
      subtitle: 'use title and subtitle to provide header',
      render: (close) => (
        <Flexbox>
          <Button label="Okay" onClick={close} />
        </Flexbox>
      ),
    })
  }
  return <Button onClick={handleClick} label="Header sample" />
}
