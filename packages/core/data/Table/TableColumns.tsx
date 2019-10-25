import React from 'react'
import TableTypes from './types'
import { Fragment } from 'react'

const TableColumns = (props: TableTypes.ColumnProps) => {
    const { row, columns, scope } = props
    const styles = props.styles

    return (
        <Fragment>
            {
                columns.map(column => {

                    if (!column.render) {
                        column.render = (row, value) => value
                    }
                    return (
                        <div
                            key={column.dataIndex}
                            css={styles.column}
                            style={column.width ? { flexBasis: column.width } : { flex: 1 }}
                            children={column.render.apply(scope, [row, row[column.dataIndex]])}
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default TableColumns