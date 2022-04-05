/* eslint-disable no-bitwise */
import React, { forwardRef, useRef, useState } from 'react'

import Checkbox from '../../control/Checkbox'

import TableCell from './TableCell'
import Types from './types'

function TableRow(props: Types.RowProps, ref: React.ForwardedRef<HTMLTableRowElement>) {
  const {
    events,
    columns,
    rowIndex,
    rowCtxItem,
    delegates,
    styles,
    rowMountType,
    getCellContext,
    rowDidUnmount,
    rowDidMount,
    enableRenderOptimization,
    selectable,
  } = props

  const {
    onSelect: onRowSelect,
    onClick: onRowClick,
    onDoubleClick: onRowDoubleClick,
    ...primaryEvents
  } = events
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

  const [needDisplay, setNeedDisplay] = useState(!enableRenderOptimization)

  if (enableRenderOptimization) {
    const height = delegates.rowHeight?.(rowCtxItem)
    if (typeof height === 'number') {
      style.height = `${height}px`
      rowId = `tr${rowIndex}_${(~~(Math.random() * 1e8)).toString(16)}`
      rowCtxItem.setNeedDisplay = (forceUnmount?: boolean) => {
        if (forceUnmount) {
          if (needDisplay) {
            rowDidUnmount?.(rowCtxItem)
            setNeedDisplay(false)
          }
          return false
        }
        let state = false
        const element = document.getElementById(rowId as string)
        if (element) {
          const position = element.getBoundingClientRect()
          if (
            position.top + height * 2 >= 0 &&
            position.top - height <= window?.innerHeight
          ) {
            state = true
            rowDidMount?.(rowCtxItem)
            setNeedDisplay(true)
          } else if (rowMountType === 'onlyWhenVisible') {
            rowDidUnmount?.(rowCtxItem)
            setNeedDisplay(false)
          }
        }
        return state
      }
    }
  }

  const rowClickTimer = useRef<ReturnType<typeof setTimeout>>(null)

  const onClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    if (typeof onRowDoubleClick === 'function') {
      if (rowClickTimer.current) {
        clearTimeout(rowClickTimer.current)
        // @ts-expect-error bla-bla
        rowClickTimer.current = null
        onRowDoubleClick(e)
      } else {
        // @ts-expect-error bla-bla
        rowClickTimer.current = setTimeout(() => {
          // @ts-expect-error bla-bla
          rowClickTimer.current = null
          onRowClick?.(e)
        }, 250)
      }
    } else {
      onRowClick?.(e)
    }
  }

  if (delegates.rowShouldRender?.(rowCtxItem) === false) {
    return null
  }

  if (needDisplay) {
    return (
      <>
        <tr
          id={rowId}
          style={style}
          {...primaryEvents}
          onClick={onClick}
          ref={ref}
          css={styles.row}
          key={rowIndex}
        >
          {selectable && (
            <td css={styles.rowCell} style={{ width: '1.25rem' }}>
              <Checkbox
                checked={rowCtxItem.isSelected}
                onClick={(e) => {
                  e.stopPropagation()
                  onRowSelect?.(e)
                }}
              />
            </td>
          )}
          {columns.map((column, columnIndex) => (
            <TableCell
              rowCtxItem={rowCtxItem}
              getCellContext={getCellContext}
              styles={styles}
              key={column.key || columnIndex.toString()}
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
    )
  }

  return <tr ref={ref} id={rowId} style={style} />
}

export default forwardRef(TableRow)
