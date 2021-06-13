import { Tree } from '@stage-ui/core'
import React from 'react'

type TreeItem = {
  label: string
  children?: TreeItem[]
}

export default () => {
  const recursive = (items?: TreeItem[]) =>
    items &&
    items.map((i, index) => (
      <Tree key={index} label={i.label}>
        {recursive(i.children)}
      </Tree>
    ))

  return recursive([
    {
      label: 'C:/',
      children: [
        {
          label: 'Windows',
          children: [
            {
              label: 'System32',
              children: [{ label: 'xvid.ax' }],
            },
          ],
        },
      ],
    },
  ])
}
