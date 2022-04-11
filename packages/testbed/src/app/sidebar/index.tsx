import React from 'react'

import { Menu } from '@stage-ui/core'

const PlaygroundSidebar = () => {
  return (
    <Menu
      direction="column"
      decoration="filled"
      // my="1rem"
      m="1rem"
      defaultValue={0}
      // items={[
      //     {
      //         value: 0,
      //         content: 'Users'
      //     },
      //     {
      //         value: 1,
      //         content: 'Places'
      //     },
      //     {
      //         value: 3,
      //         content: 'Settings'
      //     },
      //     {
      //         value: 4,
      //         content: <Cube />
      //     }
      // ]}
    />
  )
}

export default PlaygroundSidebar