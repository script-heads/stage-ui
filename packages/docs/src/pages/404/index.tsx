import React from 'react'

import { Header, Flexbox } from '@stage-ui/core'

const Page404 = () => {
  return (
    <Flexbox column h="70vh" w="100wh" alignItems="center" justifyContent="center">
      <Header size="40vh" color="onSurface" m={0}>
        404
      </Header>
    </Flexbox>
  )
}

export default Page404
