import React, { useState } from 'react'

import { Flexbox, Table } from '@stage-ui/core'
import TableTypes from '@stage-ui/core/data/Table/types'

type Row = { id: number; name: string }

const App = () => {
  const data: Row[] = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
  ]

  const [selected, setSelected] = useState<Row[]>([])

  const handleSelect = (rows: TableTypes.TableRowContext<Row>[]) => {
    const stateMap = (prevState: Row[]) => {
      let a = prevState.slice()
      rows.forEach((r) => {
        a = r.isSelected ? a.filter((rr) => rr.id !== r.row.id) : a.concat(r.row)
      })
      return a
    }
    setSelected(stateMap)
  }

  const handleClick = (row: TableTypes.TableRowContext<Row>) => {
    handleSelect([row])
  }

  return (
    <Flexbox>
      <Table
        data={data}
        selected={selected}
        onRowDoubleClick={() => console.log('double click')}
        onRowClick={handleClick}
        onCheckboxClick={handleSelect}
        columns={[
          { key: 'id', title: 'id', primary: true },
          { key: 'name', title: 'name' },
        ]}
      />
    </Flexbox>
  )
}

export default App
