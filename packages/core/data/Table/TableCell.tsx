import React, { forwardRef, RefForwardingComponent, useState } from 'react'
import Types from './types'

const TableCell: RefForwardingComponent<HTMLTableDataCellElement, Types.CellProps> = (props, ref) => {
    const { column, rowIndex, dc, styles, getCellContext } = props

    let content = dc.row[column.key] || null

    /**
     * Need to force function call column.render 
     * when isModify changing for current cell
     */
    const [modifyState, setModifyState] = useState<boolean>(false)
    /**
     * Update DataCollection state
     */
    dc.setModifyState[column.key] = setModifyState
    dc.isCellModify[column.key] = modifyState

    if (column.render) {
        content = column.render(
            getCellContext(rowIndex, column.key) as Types.TableCellContext, 
            rowIndex, 
        )
    }

    return (
        <td
            css={styles.rowCell}
            style={{
                width: column.width || 'auto'
            }}
            children={content}
        />

    )
}

export default forwardRef(TableCell)