import { Table } from '@flow-ui/core'
import React from 'react'

const PlaygroundTable = () => {
    return (
        <Table
            columns={[
                { title: 'Name', key: 'name', sort: 'ASC' },
                { title: 'age', key: 'age', sort: 'ASC' },
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
                pageSize: 5
            }}
        />
    )
}

export default PlaygroundTable