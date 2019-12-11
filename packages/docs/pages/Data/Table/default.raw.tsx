import React from 'react';
import { Table } from '@flow-ui/core';

export default () => {
    const columns = [
        { title: '#', dataIndex: 'id', width: 40 },
        { title: 'Fullname', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age', width: 40 }
    ];
    const data = [{ id: 1, name: 'Matt', age: 25 }];

    return (
        <Table columns={columns} data={data} />
    )
}