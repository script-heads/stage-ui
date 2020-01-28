import React, { forwardRef, RefForwardingComponent, useState } from 'react'
import Types from './types'
import { Pageswitch, Flexbox } from '../..'

const TableFoot: RefForwardingComponent<HTMLTableCellElement, Types.FootProps> = (props, ref) => {
    const { columns, pagination, dc, styles, onPageChange } = props
   
    let needDisplay = false
    const paginationNeedDisplay = pagination && (
        pagination.alwaysVisible || dc.length > pagination.pageSize
    )

    if (paginationNeedDisplay) {
        needDisplay = true
    }

    if (!needDisplay) {
        return null
    }

    return (
        <tfoot>
            <tr>
                <td ref={ref} css={styles.footer} colSpan={columns.length}>
                    <Flexbox justifyContent="flex-end">
                        {paginationNeedDisplay && (
                            <Pageswitch
                                length={dc.length}
                                options={{ ...pagination }}
                                onChange={onPageChange}
                            />
                        )}
                    </Flexbox>
                </td>
            </tr>
        </tfoot>
    )
}

export default forwardRef(TableFoot)