import React from 'react'
import { Button, dialog } from '@stage-ui/core'

export default () => {
  const handleClick = () =>
    dialog({
      decoration: 'panel',
      title: 'Panel',
      subtitle: 'Tab outside to close',
      render: (close) => <Button mt="1rem" label="Dismiss" onClick={close} />,
    })
  return <Button label="Push" onClick={handleClick} />
}
