import { Header, Text, Flexbox } from '@stage-ui/core'
import React from 'react'

const Page404 = () => {
  return (
    <Flexbox column h="100vh" w="100wh" alignItems="center" justifyContent="center">
      <Header size="xl" color="primary" m={0}>
        404
      </Header>
      <Text color="hard">Page not found</Text>
    </Flexbox>
  )
}

export default Page404
