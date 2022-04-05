import React, { useState } from 'react'

import { Table } from '@stage-ui/core'
import TableTypes from '@stage-ui/core/data/Table/types'

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

  const [selected, setSelected] = useState<Row[]>([])

  const onCheckboxClick = (rows: TableTypes.TableRowContext<Row>[]) => {
    const stateMap = (prevState: Row[]) => {
      let array = prevState.slice()
      rows.forEach((r) => {
        array = r.isSelected
          ? array.filter((rr) => rr.id !== r.row.id)
          : array.concat(r.row)
      })
      return array
    }
    setSelected(stateMap)
  }

  const onRowClick = (row: TableTypes.TableRowContext<Row>) => {
    onCheckboxClick([row])
  }

  return (
    <Table
      data={data}
      selected={selected}
      onRowDoubleClick={() => alert('double click')}
      onRowClick={onRowClick}
      onCheckboxClick={onCheckboxClick}
      columns={[
        { title: 'ID', key: 'id', primary: true },
        { title: 'Fullname', key: 'name' },
        { title: 'Age', key: 'age', width: 120 },
      ]}
    />
  )
}
