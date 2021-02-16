/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import Types from './types'

const TableCell: ForwardRefRenderFunction<HTMLTableDataCellElement, Types.CellProps<any>> = (props, ref) => {
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
    rowCtxItem['setModifyState'][column.key] = setModifyState
    rowCtxItem['isCellModify'][column.key] = modifyState

    if (column.render) {
        content = column.render(
            getCellContext(rowIndex, column.key) as Types.TableCellContext<any>, 
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