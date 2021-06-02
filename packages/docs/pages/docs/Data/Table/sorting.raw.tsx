import { notify, Table } from '@stage-ui/core'
import Types from '@stage-ui/core/data/Table/types'
import React, { useState } from 'react'


export default () => {
    const dataA = [{ name: 'Anna', age: 25 }, { name: 'Dana', age: 29 }, { name: 'Kate', age: 26 }]
    const dataB = [{ name: 'John', age: 41 }, { name: 'Carl', age: 33 }, { name: 'Mate', age: 15 }]

    const [data, setDate] = useState(dataA)

    const asyncSort: Types.TableSortAsync = (type) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setDate(type === 'ASC' ? dataA : dataB)
                resolve()
            }, 300)
        })
    }

    return (
        <Table
            columns={[
                { title: 'Basic', key: 'age', sort: 'ASC' },
                { title: 'Async', key: 'name', sort: asyncSort },
            ]}
            data={data}
            onChange={() => {
                notify({
                    title: 'Row chage event',
                    message: 'fired!',
                    timeout: 1000,
                })
            }}
        />
    )
}