import { Flexbox } from '@stage-ui/core'
import { ArrowIosDownward, ArrowIosUpward } from '@stage-ui/core/icons'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Types from './types'

const TableHeadCell: RefForwardingComponent<HTMLTableDataCellElement, Types.HeadCellProps> = (props, ref) => {
    const { column, styles, setSort } = props

    const setSorting = () => {
        column.sort = column.sort !== 'ASC' ? 'ASC' : 'DESC'
        setSort({
            key: column.key,
            sort: column.sort
        })
    }

    if (column.sort) {
        const ArrowIcon = column.sort === 'ASC'
            ? ArrowIosDownward
            : ArrowIosUpward
        return (
            <th ref={ref} onClick={setSorting} css={styles.headCell({
                sort: typeof column.sort !== 'undefined'
            })}>
                <Flexbox alignItems="center">
                    {column.title}
                    {column.sort && (
                        <ArrowIcon ml="0.25rem" />
                    )}
                </Flexbox>
            </th>
        )
    }
    return (
        <th ref={ref} css={styles.headCell({ sort: false })}>
             {column.title}
        </th>
    )
}

export default forwardRef(TableHeadCell)