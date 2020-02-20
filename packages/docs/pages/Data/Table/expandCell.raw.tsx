import { Flexbox, Table, Text } from '@flow-ui/core'
import T from '@flow-ui/core/data/Table/types'
import { ArrowIosUpward } from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    const ExpandCell = (props: { ctx: T.TableCellContext }) => {
        
        return (
            <Flexbox alignItems="center" onClick={() => {
                if (props.ctx.isExpand) {
                    props.ctx.setExpand(null)
                } else {
                    props.ctx.setExpand(
                        <Text>Any ReactNode here.</Text>
                    )
                }
            }}>
                <ArrowIosUpward
                    mr="0.5rem"
                    color={c => c.primary}
                    rotate={props.ctx.isExpand ? 180 : 0}
                />
                <Text>{props.ctx.value}</Text>
            </Flexbox>
        )
    }

    return (
        <Table
            columns={[
                {
                    title: 'Fullname', key: 'name', render: ctx => (
                        <ExpandCell ctx={ctx} />
                    )
                },
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