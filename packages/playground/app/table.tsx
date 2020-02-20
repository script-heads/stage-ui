import { Flexbox, Meter, Range, Table, Text, TextField } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import { ArrowIosDownward, Checkmark, Edit2 } from '@flow-ui/core/icons'
import React from 'react'

const EditAge = (props: { ctx: T.TableCellContext }) => {
    const [value, setValue] = React.useState(parseInt(props.ctx.value as string))
    const save = () => {
        props.ctx.row[props.ctx.key] = value
        props.ctx.setModify(false)
    }
    return (
        <Flexbox alignItems="center">
            <Checkmark
                size="1rem"
                mr="0.5rem"
                color={c => c.success}
                onClick={save}
            />
            <TextField
                flex={1}
                type="number"
                mr="0.5rem"
                autoFocus
                name={props.ctx.column?.title}
                value={value}
                onChange={e =>setValue(parseInt(e.target.value))}
                onEnter={save}
            />
            <Range
                flex={3}
                value={value}
                onChange={(value) => setValue(value)}
            />
        </Flexbox>
    )
}

const DisplayAge = (props: { ctx: T.TableCellContext }) => (
    <Flexbox alignItems="center">
        <Edit2
            size="1rem"
            mr="0.5rem"
            color={c => c.primary}
            onClick={() => {
                props.ctx.setModify(true)
            }}
        />
        <Text mr={'0.5rem'}>{props.ctx.value}</Text>
        <Meter 
            loading={parseInt(props.ctx.value as string) < 18}
            flex={1}
            percent={parseInt(props.ctx.value as string)} 
        />
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
                    width: '50%',
                    render: ctx => {
                        if (ctx.isModify) {
                            return <EditAge ctx={ctx} />
                        } else {
                            return <DisplayAge ctx={ctx} />
                        }
                    }
                },
            ]}
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 16 },
                { name: 'Kate', age: 26 },
                { name: 'Bob', age: 49 },
                { name: 'Elice', age: 17 },
                { name: 'George', age: 32 },
            ]}
            pagination={{
                pageSize: 3
            }}
        />
    )
}

export default PlaygroundTable