import { Header, Text, Flexbox } from '@stage-ui/core'
import React from 'react'

const Page404 = () => {
  return (
    <Flexbox column h="70vh" w="100wh" alignItems="center" justifyContent="center">
      <Header size="40vh" color="onSurface" m={0}>
        404
      </Header>
      <Text color="hard">Page not found</Text>
    </Flexbox>
  )
}

export default Page404
