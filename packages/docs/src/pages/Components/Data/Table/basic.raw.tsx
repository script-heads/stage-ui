import React, { useRef } from 'react'

import { Table } from '@stage-ui/core'
import TableTypes from '@stage-ui/core/data/Table/types'

type Row = { name: string; age: number }

export default () => {
  /**
   * Provide Row type for typed up all
   * table context with it
   */
  const ref = useRef<TableTypes.TableRef<Row>>()
  const data: Row[] = [
    { name: 'Matt', age: 25 },
    { name: 'John', age: 29 },
    { name: 'Kate', age: 26 },
  ]
  return (
    <Table
      ref={ref}
      data={data}
      columns={[
        { title: 'Fullname', key: 'name' },
        { title: 'Age', key: 'age', width: 120 },
      ]}
    />
  )
}
