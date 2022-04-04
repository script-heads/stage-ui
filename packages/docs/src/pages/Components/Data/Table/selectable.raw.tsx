import React, { useState } from 'react'

import { Table } from '@stage-ui/core'

type Row = { id: number; name: string; age: number }

export default () => {
  /**
   * Provide Row type for typed up all
   * table context with it
   */
  const data: Row[] = [
    { id: 1, name: 'Matt', age: 25 },
    { id: 2, name: 'John', age: 29 },
    { id: 3, name: 'Kate', age: 26 },
  ]

  const [selectedData, setSelectedData] = useState<Row[]>([])

  // const onRowSelect = (r) => {
  //   const nextData = selectedData.slice().concat(r.row)
  //   setSelectedData(nextData)
  // }

  return (
    <Table
      data={data}
      selected={[]}
      onRowSelect={() => {}}
      columns={[
        { title: 'ID', key: 'id', primary: true },
        { title: 'Fullname', key: 'name' },
        { title: 'Age', key: 'age', width: 120 },
      ]}
      onChange={(e) => {
        console.log(e)
      }}
    />
  )
}
