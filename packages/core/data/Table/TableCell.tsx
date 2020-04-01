import React, { forwardRef, RefForwardingComponent, useState } from 'react'
import Types from './types'

const TableCell: RefForwardingComponent<HTMLTableDataCellElement, Types.CellProps> = (props, ref) => {
    const { column, rowIndex, rowCtxItem, styles, getCellContext } = props

    let content = rowCtxItem.row[column.key] || null

    /**
     * Need to force function call column.render 
     * when isModify changing for current cell
     */
    const [modifyState, setModifyState] = useState<boolean>(false)
    /**
     * Update RowContextData state
     */
    rowCtxItem.setModifyState[column.key] = setModifyState
    rowCtxItem.isCellModify[column.key] = modifyState

    if (column.render) {
        content = column.render(
            getCellContext(rowIndex, column.key) as Types.TableCellContext, 
            rowIndex, 
        )
    }

    return (
        <td
            ref={ref}
            css={styles.rowCell}
            style={{
                width: column.width || 'auto'
            }}
            children={content}
        />
    )
}

export default forwardRef(TableCell)