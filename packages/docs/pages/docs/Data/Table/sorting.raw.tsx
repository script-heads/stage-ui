import { Table } from '@stage-ui/core'
import React from 'react'

export default () => {
    return (
        <Table
            columns={[
                { title: 'Fullname', key: 'name' },
                { title: 'Age', key: 'age', width: 120, sort: 'ASC' },
            ]}
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 29 },
                { name: 'Kate', age: 26 },
            ]}
        />
    )
}