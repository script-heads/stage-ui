import { Button, Flexbox, Table, Text } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import React from 'react'

export default () => {
    
    const ExpandContainer = () => (
        <Text>More information here.</Text>
    )

    const DisplayName = (props: { ctx: T.TableCellContext }) => (
        <Flexbox justifyContent="space-between" alignItems="center">
            <Text>{props.ctx.value}</Text>
            <Button
                decoration="text"
                children={props.ctx.isExpand ? 'Close' : 'Expand'}
                onClick={() => {
                    if (props.ctx.isExpand) {
                        props.ctx.setExpand(null)
                    } else {
                        props.ctx.setExpand(<ExpandContainer/>)
                    }
                }}
            />
        </Flexbox>
    )
    
    return (
        <Table 
            columns={[
                { title: 'Fullname', key: 'name' },
                { title: 'Age', key: 'age', width: 40, render: ctx => (
                    <DisplayName ctx={ctx} />
                )},
            ]} 
            data={[
                { name: 'Matt', age: 25 },
                { name: 'John', age: 29 },
                { name: 'Kate', age: 26 },
            ]} 
        />
    )
}