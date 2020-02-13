import { Flexbox, Table, Text, TextField } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import { ArrowIosDownward, Edit2, Checkmark } from '@flow-ui/core/icons'
import React from 'react'

const EditName = (props: { ctx: T.TableCellContext }) => {
    let tmp = props.ctx.value as string
    const save = () => {
        props.ctx.row[props.ctx.key] = tmp
        props.ctx.setModify(false)
    }
    return (
        <Flexbox alignItems="center">
            <Checkmark
                size="1rem"
                mr="0.5rem"
                color={c => c.successful}
                onClick={save}
            />
            <TextField
                autoFocus
                name={props.ctx.column?.title}
                defaultValue={tmp}
                onChange={e => tmp = e.target.value}
                onEnter={save}
            />
        </Flexbox>
    )
}

const DisplayName = (props: { ctx: T.TableCellContext }) => (
    <Flexbox alignItems="center">
        <Edit2
            size="1rem"
            mr="0.5rem"
            color={c => c.primary}
            onClick={() => {
                props.ctx.setModify(true)
            }}
        />
        <Text>{props.ctx.value}</Text>
    </Flexbox>
)

const ExpandCell = (props: { ctx: T.TableCellContext }) => {
    return (
        <Flexbox css={{ cursor: 'pointer' }} alignItems="center" onClick={() => {
            if (props.ctx.isExpand) {
                props.ctx.setExpand(null)
            } else {
                props.ctx.setExpand(
                    <Text>Any ReactNode here.</Text>
                )
            }
        }}>
            <ArrowIosDownward
                rotate={props.ctx.isExpand ? 180 : 0}
                mr="0.5rem"
                color={c => c.primary}
            />
            <Text>{props.ctx.value}</Text>
        </Flexbox>
    )
}

const PlaygroundTable = () => {

    return (
        <Table
            columns={[
                { 
                    title: 'Name', 
                    key: 'name', 
                    sort: 'ASC', 
                    render: ctx => <ExpandCell ctx={ctx} /> 
                },
                { 
                    title: 'age', 
                    key: 'age', 
                    sort: 'ASC',
                    width: '20rem',
                    render: ctx => {
                        if (ctx.isModify) {
                            return <EditName ctx={ctx} />
                        } else {
                            return <DisplayName ctx={ctx} />
                        }
                    }
                },
            ]}
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 29 },
                { name: 'Kate', age: 26 },
                { name: 'Bob', age: 32 },
                { name: 'Elice', age: 19 },
                { name: 'George', age: 32 },
            ]}
            pagination={{
                pageSize: 3
            }}
        />
    )
}

export default PlaygroundTable