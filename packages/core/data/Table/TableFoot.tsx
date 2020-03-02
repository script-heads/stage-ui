import { Flexbox, Pageswitch } from '@flow-ui/core'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Types from './types'

const TableFoot: RefForwardingComponent<HTMLTableCellElement, Types.FootProps> = (props, ref) => {
    const { columns, pagination, rowCtx, styles, footerContent, onPageChange } = props
   
    let needDisplay = false
    const paginationNeedDisplay = pagination && (
        pagination.alwaysVisible || rowCtx.length > pagination.pageSize
    )

    if (paginationNeedDisplay || footerContent) {
        needDisplay = true
    }
    if (!needDisplay) {
        return null
    }

    return (
        <tfoot>
            <tr>
                <td ref={ref} css={styles.footer} colSpan={columns.length}>
                    <Flexbox justifyContent={footerContent ? 'space-between' : 'flex-end'}>
                        {footerContent}
                        {paginationNeedDisplay && (
                            <Pageswitch
                                length={rowCtx.length}
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