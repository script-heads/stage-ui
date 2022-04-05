/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useState } from 'react'

import Types from './types'

export const getTR = (target: HTMLElement | null): HTMLTableRowElement | null => {
  if (!target || target.tagName === 'TR') {
    return target as HTMLTableRowElement
  }
  return getTR(target.parentElement)
}

function TableCell(
  props: Types.CellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>,
) {
  const { column, rowIndex, rowCtxItem, styles, getCellContext } = props

  /**
   * Need to force function call column.render
   * when isModify changing for current cell
   */
  const [modifyState, setModifyState] = useState<boolean>(false)

  rowCtxItem.setModifyState[column.key] = setModifyState
  rowCtxItem.isCellModify[column.key] = modifyState
  let content = rowCtxItem.row[column.key] || null

  /**
   * Update RowContextData state
   */
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
        width: column.width || 'auto',
      }}
    >
      {content}
    </td>
  )
}

export default forwardRef(TableCell)
