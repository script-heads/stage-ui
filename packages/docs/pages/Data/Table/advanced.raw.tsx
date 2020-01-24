import React, { useState, Fragment } from 'react'
import { Table, Flexbox, Button, Block } from '@flow-ui/core'

export default () => {
    const columns = [
        { title: '#', dataIndex: 'id', width: 40 },
        { title: 'Fullname', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age', width: 40 }
    ]
    const data = [
        { id: 1, name: 'Matt', age: 25 },
        { id: 2, name: 'Marry', age: 20 },
        { id: 3, name: 'David', age: 35 }
    ]

    const [form, setForm] = useState({ key: -1, code: 'NONE' })

    const close = () => setForm({
        key: -1,
        code: 'NONE'
    })

    const getName = (key: number) => {
        const item = data.find(k => k.id === key)
        return  item ? item.name : ''
    }

    const forms = {
        NONE: () => null,
        EDIT: () => (
            <Flexbox flex={1} justifyContent="space-between" alignItems="center">
                <Block>This is edit form for {getName(form.key)}</Block>
                <Button
                    size="small"
                    onClick={close}
                    children="Close"
                />
            </Flexbox>
        ),
        DELETE: () => (
            <Flexbox flex={1} justifyContent="space-between" alignItems="center">
                <Block>Delete {getName(form.key)}?</Block>
                <Button
                    size="small"
                    color={c => c.accent.red.css()}
                    onClick={close}
                    children="Delete"
                />
            </Flexbox>
        )
    }

    return (
        <Table
            columns={columns}
            data={data}
            form={{
                key: form.key,
                render: forms[form.code]
            }}
            indexKey="id"
            actions={[{
                label: 'Edit',
                onAction: (row) => setForm({
                    key: row.id,
                    code: 'EDIT'
                })
            }, {
                label: 'Delete',
                onAction: (row) => setForm({
                    key: row.id,
                    code: 'DELETE'
                })
            }]}
        />
    )
}