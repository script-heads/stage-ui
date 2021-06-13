import { Button, Flexbox, notify, Text } from '@stage-ui/core'
import { Person } from '@stage-ui/icons'
import React from 'react'

export default () => {
  const handleClick = () => {
    notify({
      title: '',
      message: '',
      decoration: 'majorShadow',
      render: (close) => (
        <Flexbox column p="1rem" w="10rem" alignItems="center">
          <Person size="4rem" mb="m" />
          <Text color="primary">Hello :)</Text>
          <Button mt="m" label="Close" onClick={close} />
        </Flexbox>
      ),
      timeout: 10000,
    })
  }
  return <Button label="Push" onClick={handleClick} />
}
