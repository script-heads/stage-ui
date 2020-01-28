import React, { forwardRef, RefForwardingComponent, useState } from 'react'
import Types from './types'

const TableCell: RefForwardingComponent<HTMLTableDataCellElement, Types.CellProps> = (props, ref) => {
    const { column, rowIndex, dcItem, styles, getCellContext } = props

    let content = dcItem.row[column.key] || null

    /**
     * Need to force function call column.render 
     * when isModify changing for current cell
     */
    const [modifyState, setModifyState] = useState<boolean>(false)
    /**
     * Update DataCollection state
     */
    dcItem.setModifyState[column.key] = setModifyState
    dcItem.isCellModify[column.key] = modifyState

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