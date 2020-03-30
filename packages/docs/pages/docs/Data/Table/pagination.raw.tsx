import { Table } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <Table 
            columns={[
                { title: 'Counter', key: 'id' },
                { title: 'Multiply', key: 'multipty' },
            ]} 
            data={
                Array(300).fill(0).map((_, idx) => ({ 
                    id: idx + 1, 
                    multipty: (idx + 1) * idx 
                }))
            } 
            pagination={{
                pageSize: 3
            }}
        />
    )
}