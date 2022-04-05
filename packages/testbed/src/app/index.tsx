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

  const handleSelect = (
    ctx: TableTypes.TableRowContext<Row>,
    e: React.MouseEvent<HTMLTableRowElement | HTMLDivElement, MouseEvent>,
  ) => {
    let nextSelected = selected.slice()
    if (!ctx.isSelected) {
      nextSelected.push(ctx.row)
    } else {
      nextSelected = nextSelected.filter((s) => s.id !== ctx.row.id)
    }

    setSelected(nextSelected)
  }

  return (
    <Flexbox>
      <Table
        data={data}
        selected={selected}
        onRowDoubleClick={() => console.log('ddc')}
        onRowClick={handleSelect}
        onRowSelect={handleSelect}
        columns={[
          { key: 'id', title: 'id', primary: true },
          { key: 'name', title: 'name' },
        ]}
      />
    </Flexbox>
  )
}

export default App
