/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { Flexbox, Table, notify } from '@stage-ui/core'

type DataRow = {
  color: string
}

const PlaygroundTable = () => {

  return (
    <Table
      onChange={(data) => {
        notify({
          title: 'Row chage event',
          message: JSON.stringify(data),
          timeout: 3000,
        })
      }}
      columns={[
        {
          key: 'color',
          title: 'Color',
          sort: 'DESC'
        },
        {
          key: '',
          dnd: (source, target, data) => {
            notify({
              title: 'Row dnd event fired',
              message: `Row ${source} moved to ${target}`,
              timeout: 3000,
            })
          },
        },
      ]}
      data={[
        { color: 'Green' },
        { color: 'Yellow' },
        { color: 'Red' },
      ]}
    />
  )
}

export default PlaygroundTable