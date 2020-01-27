import { Table, Button, TextField, Text, Flexbox } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import React from 'react'

export default () => {
    
    const EditName = (props: { ctx: T.TableCellContext }) => {
        let tmp = props.ctx.value as string
        return (
            <Flexbox>
                <TextField
                    name={props.ctx.column?.title}
                    defaultValue={tmp}
                    onChange={e => tmp = e.target.value}
                    mr="1rem"
                />
                <Button
                    decoration="text"
                    children="Save"
                    onClick={() => {
                        props.ctx.row[props.ctx.key] = tmp
                        props.ctx.setModify(false)
                    }}
                />
            </Flexbox>
        )
    }

    const DisplayName = (props: { ctx: T.TableCellContext }) => (
        <Flexbox justifyContent="space-between" alignItems="center">
            <Text>{props.ctx.value}</Text>
            <Button
                decoration="text"
                children="Edit"
                onClick={() => props.ctx.setModify(true)}
            />
        </Flexbox>
    )
    
    return (
        <Table 
            columns={[
                { title: 'Fullname', key: 'name', render: ctx => {
                    if (ctx.isModify) {
                        return <EditName ctx={ctx} />
                    } else {
                        return <DisplayName ctx={ctx} />
                    }
                } },
                { title: 'Age', key: 'age', width: 40 },
            ]} 
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 29 },
                { name: 'Kate', age: 26 },
            ]} 
        />
    )
}