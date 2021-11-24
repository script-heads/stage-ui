/* eslint-disable no-bitwise */
import React, { forwardRef, ForwardRefRenderFunction, Fragment, useState } from 'react'
import { dndContext } from '.'
import TableCell from './TableCell'
import Types from './types'

export const getTR = (target: HTMLElement | null): HTMLTableRowElement | null => {
  if (!target || target.tagName === 'TR') {
    return target as HTMLTableRowElement
  }
  return getTR(target.parentElement)
}

const TableRow: ForwardRefRenderFunction<HTMLTableRowElement, Types.RowProps<any>> = (
  props,
  ref,
) => {
  const { columns, rowIndex, rowCtxItem, delegates, styles, getCellContext } = props
  const style: React.CSSProperties = {}
  /**
   * State with expanded row
   * if null then RowContext isExpand will be false
   */
  const [expandComponent, setExpandComponent] = useState<React.ReactNode>(null)

  /**
   * Update RowContext state
   */
  rowCtxItem.setExpandComponent = setExpandComponent
  rowCtxItem.isExpand = Boolean(expandComponent)

  let rowId: string | undefined

  const [needDisplay, setNeedDisplay] = useState(!props.enableRenderOptimization)
  const [dragOver, setDragOver] = useState(false)

  if (props.enableRenderOptimization) {
    const height = props.delegates.rowHeight?.(rowCtxItem)
    if (typeof height === 'number') {
      style.height = `${height}px`
      rowId = React.useMemo(() => `tr${rowIndex}_${(~~(Math.random() * 1e8)).toString(16)}`, [])
      rowCtxItem.setNeedDisplay = (forceUnmount?: boolean) => {
        if (forceUnmount) {
          if (needDisplay) {
            props.rowDidUnmount?.(rowCtxItem)
            setNeedDisplay(false)
          }
          return false
        }
        let state = false
        const element = document.getElementById(rowId as string)
        if (element) {
          const position = element.getBoundingClientRect()
          if (position.top + height * 2 >= 0 && position.top - height <= window.innerHeight) {
            state = true
            props.rowDidMount?.(rowCtxItem)
            setNeedDisplay(true)
          } else if (props.rowMountType === 'onlyWhenVisible') {
            props.rowDidUnmount?.(rowCtxItem)
            setNeedDisplay(false)
          }
        }
        return state
      }
    }
  }

  if (delegates.rowShouldRender?.(rowCtxItem) === false) {
    return null
  }

  return (
    <>
      {needDisplay ? (
        <>
          <tr
            id={rowId}
            style={style}
            {...props.events}
            ref={ref}
            css={[styles.row({ dragOver })]}
            key={rowIndex}
            onDragStart={(e) => {
              e.stopPropagation()
              // @ts-ignore incorrect event type
              e.target.draggable = false
              e.dataTransfer.dropEffect = 'move'
              dndContext.source = rowIndex
            }}
            onDrop={(e) => {
              e.stopPropagation()
              setDragOver(false)
              props.dndRender()
            }}
            onDragOver={(e) => {
              e.stopPropagation()
              e.preventDefault()
              dndContext.target = rowIndex
              setDragOver(true)
            }}
            onDragLeave={(e) => {
              e.stopPropagation()
              setDragOver(false)
            }}
            onDragEnd={() => {
              dndContext.source = -1
              dndContext.target = -1
            }}
          >
            {columns.map((column, columnIndex) => (
              <TableCell
                rowCtxItem={rowCtxItem}
                getCellContext={getCellContext}
                styles={styles}
                key={columnIndex}
                column={column}
                rowIndex={rowIndex}
              />
            ))}
          </tr>
          {expandComponent && (
            <tr ref={ref}>
              <td css={styles.expandContainer} colSpan={columns.length}>
                {expandComponent}
              </td>
            </tr>
          )}
        </>
      ) : (
        <tr ref={ref} id={rowId} style={style} />
      )}
    </>
  )
}

export default forwardRef(TableRow)
