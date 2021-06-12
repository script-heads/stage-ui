import { Block, useBreakpoints } from '@stage-ui/core'
import { Car, Camera, Battery, Phone } from '@stage-ui/icons'
import React from 'react'

export default () => {
  const component = useBreakpoints<JSX.Element>([<Car />, <Camera />, <Battery />, <Phone />])

  return (
    <Block decoration="surface" p="m">
      Resize screen, to change icon {component}
    </Block>
  )
}
