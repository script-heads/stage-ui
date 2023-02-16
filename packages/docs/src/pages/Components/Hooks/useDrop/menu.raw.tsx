import React from 'react'

import { Button, notify, useDropMenu } from '@stage-ui/core'

export default () => {
  const menu = useDropMenu([
    {
      text: 'Open',
      icon: 'Cube',
      onClick: () => {
        notify({
          title: 'Context menu',
          message: 'Open clicked!',
          timeout: 1000,
        })
      },
    },
    {
      text: 'Edit',
      icon: 'Edit2',
    },
    {
      text: 'Delete',
      icon: 'Trash',
      color: 'red',
      hotkey: { key: 'E', alt: true },
    },
  ])

  return <Button label="Show menu" onClick={menu} />
}
