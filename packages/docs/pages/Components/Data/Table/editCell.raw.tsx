import React from 'react'
import { Flexbox, Table, Text, TextField } from '@stage-ui/core'
import TableTypes from '@stage-ui/core/data/Table/types'
import { Checkmark, Edit2 } from '@stage-ui/icons'

type CellData = { name: string; age: number }

export default () => {
  const EditName = (props: { ctx: TableTypes.TableCellContext<CellData> }) => {
    let tmp = props.ctx.value as string
    const save = () => {
      props.ctx.row[props.ctx.key] = tmp
      props.ctx.setModify(false)
    }
    return (
      <Flexbox alignItems="center">
        <Checkmark size="1rem" mr="0.5rem" color="success" onClick={save} />
        <TextField
          autoFocus
          name={props.ctx.column?.title as string}
          defaultValue={tmp}
          onChange={(e) => (tmp = e.target.value)}
          onEnter={save}
        />
      </Flexbox>
    )
  }

  const DisplayName = (props: { ctx: TableTypes.TableCellContext<CellData> }) => (
    <Flexbox alignItems="center">
      <Edit2
        size="1rem"
        mr="0.5rem"
        color="primary"
        onClick={() => {
          props.ctx.setModify(true)
        }}
      />
      <Text>{props.ctx.value}</Text>
    </Flexbox>
  )

  return (
    <Table
      columns={[
        {
          title: 'Fullname',
          key: 'name',
          render: (ctx) => {
            if (ctx.isModify) {
              return <EditName ctx={ctx} />
            }
            return <DisplayName ctx={ctx} />
          },
        },
        { title: 'Age', key: 'age', width: 120 },
      ]}
      data={[
        { name: 'Matt', age: 25 },
        { name: 'John', age: 29 },
        { name: 'Kate', age: 26 },
      ]}
    />
  )
}
