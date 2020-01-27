import React, { forwardRef, RefForwardingComponent } from 'react'
import Types from './types'
import { Icon, Flexbox } from '../..'

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
        return (
            <th css={styles.headCell({
                sort: typeof column.sort !== 'undefined'
            })}>
                <Flexbox alignItems="center" onClick={setSorting}>
                    {column.title}
                    {column.sort && (
                        <Icon
                            ml="0.25rem"
                            type={
                                t => column.sort === 'ASC'
                                    ? t.outline.arrowIosDownward
                                    : t.outline.arrowIosUpward
                            }
                        />
                    )}
                </Flexbox>
            </th>
        )
    }
    return (
        <th css={styles.headCell}>
             {column.title}
        </th>
    )
}

export default forwardRef(TableHeadCell)