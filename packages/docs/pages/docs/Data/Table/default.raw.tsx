import { Table } from '@stage-ui/core'
import TableTypes from '@stage-ui/core/data/Table/types'
import React, { useRef } from 'react'

export default () => {
    const ref = useRef<TableTypes.TableRef<any>>()
    
    return (
        <Table 
            ref={ref}
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 29 },
                { name: 'Kate', age: 26 },
            ]}
            columns={[
                { title: 'Fullname', key: 'name' },
                { title: 'Age', key: 'age', width: 120 }
            ]}
        />
    )
}