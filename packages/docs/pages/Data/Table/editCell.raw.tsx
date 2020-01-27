import { Flexbox, Icon, Table, Text, TextField } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import React from 'react'

export default () => {
    
    const EditName = (props: { ctx: T.TableCellContext }) => {
        let tmp = props.ctx.value as string
        return (
            <Flexbox alignItems="center">
                <Icon
                    size="1rem"
                    mr="0.5rem"
                    color={c => c.accent.green.css()}
                    type={t => t.outline.checkmark}
                    onClick={() => {
                        props.ctx.row[props.ctx.key] = tmp
                        props.ctx.setModify(false)
                    }}
                />
                <TextField
                    autoFocus
                    name={props.ctx.column?.title}
                    defaultValue={tmp}
                    onChange={e => tmp = e.target.value}
                    mr="1rem"
                />
            </Flexbox>
        )
    }

    const DisplayName = (props: { ctx: T.TableCellContext }) => (
        <Flexbox alignItems="center">
            <Icon
                size="1rem"
                mr="0.5rem"
                color={c => c.primary.css()}
                type={t => t.outline.edit2}
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
                { title: 'Fullname', key: 'name', render: ctx => {
                    if (ctx.isModify) {
                        return <EditName ctx={ctx} />
                    } else {
                        return <DisplayName ctx={ctx} />
                    }
                } },
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