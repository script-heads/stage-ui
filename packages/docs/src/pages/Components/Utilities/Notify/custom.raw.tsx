import { Button, Flexbox, Header, notify } from '@stage-ui/core'
import React from 'react'

export default () => {
  const handleClick = () => {
    notify({
      title: '',
      message: '',
      decoration: 'majorShadow',
      render: (close) => (
        <Flexbox column p="m">
          <Header color="primary">Hello there.</Header>
          <Button mt="m" size="s" decoration="outline" label="Close" onClick={close} />
        </Flexbox>
      ),
      timeout: 10000,
    })
  }
  return <Button label="Push" onClick={handleClick} />
}
