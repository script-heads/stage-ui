import { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import { getTR } from './TableRow'
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
  rowCtxItem.setModifyState[column.key] = setModifyState
  rowCtxItem.isCellModify[column.key] = modifyState

  /**
   * Draggble anchor
   */
  if (column.dnd) {
    content = <div css={styles.rowCellAnchor} children={content} />
  }

  if (column.render) {
    content = column.render(getCellContext(rowIndex, column.key) as Types.TableCellContext<any>, rowIndex)
  }

  return (
    <td
      ref={ref}
      css={styles.rowCell}
      style={{
        width: column.width || (column.dnd ? '1rem' : 'auto'),
      }}
      children={content}
      onMouseDown={(e) => {
        if (column.dnd) {
          const tr = getTR(e.target as HTMLElement)
          if (tr) {
            tr.draggable = true
          }
        }
      }}
    />
  )
}

export default forwardRef(TableCell)
