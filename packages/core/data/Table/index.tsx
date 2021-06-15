import { useSystem } from '@stage-ui/system'
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styles from './styles'
import TableFoot from './TableFoot'
import TableHeadCell from './TableHeadCell'
import TableRow from './TableRow'
import Types from './types'

export const dndContext = {
  willRender: false,
  source: -1,
  target: -1,
}

function Table<Row extends Types.RowType>(props: Types.Props<Row>, ref: Types.TableRef<Row>) {
  const tableRef = useRef<HTMLTableElement>(null)
  const {
    classes,
    attributes,
    events: { onChange, ...events },
  } = useSystem('Table', props, styles)
  const { columns, pagination, footer } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [reloadData, reload] = useState(false)
  const [sort, setSort] = useState<Types.TableSortObject>({
    key: '',
    sort: 'ASC',
  })

  const isDraggableSupport = !!columns.find((column) => column.dnd)

  const mapRowContext = (row: Row) => {
    const isCellModify: Types.TableRowContext<Row>['isCellModify'] = {}
    columns.forEach((column) => {
      isCellModify[column.key] = false
    })
    return {
      row,
      isExpand: false,
      isVisible: true,
      isCellModify,
      setModifyState: {},
    }
  }
  /**
   * TODO: issue with dragbale
   * if dnd enabled then controlled data
   * will not work and vice versa
   */
  let rowCtx = isDraggableSupport
    ? useMemo(() => props.data.map(mapRowContext), [])
    : props.data.slice().map(mapRowContext)

  /**
   * Getting current data state
   */
  const getData = () => rowCtx.map((currentRowCtx) => currentRowCtx.row)

  /**
   * Soring column by its settings
   */
  const columnSort = (value: Types.TableSortObject) => {
    if (value.sort) {
      rowCtx = rowCtx.sort((a, b) => {
        if (value.sort === 'ASC') {
          if (typeof a.row[value.key] === 'string') {
            return a.row[value.key].localeCompare(b.row[value.key])
          }
          return a.row[value.key] - b.row[value.key]
        }
        if (typeof b.row[value.key] === 'string') {
          return b.row[value.key].localeCompare(a.row[value.key])
        }
        return b.row[value.key] - a.row[value.key]
      })
    }
  }

  const toggleSort = (value: Types.TableSortObject) => {
    const column = columns.find((currentColumn) => currentColumn.key === value.key)
    if (column) {
      if (typeof column.sort === 'function') {
        return column.sort(value.sort)
      }
      setSort(value)
    }
    return new Promise((resolve) => resolve(undefined))
  }

  /**
   * Render data after DnD
   */
  const dndRender = () => {
    dndContext.willRender = true
    rowCtx.splice(dndContext.target, 0, rowCtx.splice(dndContext.source, 1)[0])
    const data = getData()
    columns.forEach((column) => {
      column.dnd?.(dndContext.source, dndContext.target, data)
    })
    /** keepit */
    setTimeout(() => {
      onChange?.(data)
    }, 0)
    reload(!reloadData)
  }

  const getCellContext: Types.TableRef<Row>['getCellContext'] = (index, key) => {
    if (!rowCtx[index]?.row) {
      return null
    }

    return {
      key,
      index,
      row: rowCtx[index].row,
      column: columns.find((column) => column.key === key) || null,
      value: rowCtx[index].row[key],
      isExpand: rowCtx[index].isExpand,
      isModify: rowCtx[index].isCellModify[key],
      isVisible: rowCtx[index].isVisible,
      setExpand: (content) => setExpand(index, content),
      setModify: (modify, kkey = key) => setModify(modify, index, kkey),
      reloadData: () => reload(!reloadData),
      setRow: (row) => {
        for (key in rowCtx[index].row) {
          rowCtx[index].row[key] = row[key]
        }
        reload(!reloadData)
      },
    }
  }

  const setExpand: Types.TableRef<Row>['setExpand'] = (index, content) => {
    if (rowCtx[index]) {
      rowCtx[index].setExpandComponent?.(content)
      return true
    }
    return false
  }

  const setModify: Types.TableRef<Row>['setModify'] = (modify, index, key) => {
    if (rowCtx[index]) {
      if (key !== undefined) {
        // @ts-ignore
        if (Object.prototype.hasOwnProperty.call(rowCtx[index].row, key)) {
          rowCtx[index].setModifyState[key]?.(modify)
          return true
        }
      }
      Object.keys(rowCtx[index].isCellModify).forEach((currentKey) => {
        rowCtx[index].setModifyState[currentKey]?.(modify)
      })
      return true
    }
    return false
  }

  /**
   * Handle refs
   */
  // @ts-ignore
  useImperativeHandle(ref, () => ({
    getCellContext,
    setExpand,
    setModify,
    getData,
    ...tableRef.current,
  }))

  /**
   * Sorting data
   */
  if (!dndContext.willRender) {
    if (sort.key) {
      columnSort(sort)
    } else {
      for (const column of columns) {
        columnSort(column as Types.TableSortObject)
      }
    }
  }
  dndContext.willRender = false

  const setNeedDisplay = () => {
    let state = 1
    for (const rowCtxItem of rowCtx) {
      const didRender = rowCtxItem.setNeedDisplay?.(state === 3)
      if (didRender) {
        state = 2
      } else if (state === 2) state = 3
    }
  }

  const enableRenderOptimization = !!props.rowMountType?.match('Visible')

  useEffect(() => {
    /**
     * Handle optimized method of render
     */
    if (enableRenderOptimization) {
      setNeedDisplay()
      document.addEventListener('resize', setNeedDisplay)
      document.addEventListener('scroll', setNeedDisplay)
      document.addEventListener('onstagescroll', setNeedDisplay)
      return () => {
        document.removeEventListener('resize', setNeedDisplay)
        document.removeEventListener('scroll', setNeedDisplay)
        document.removeEventListener('onstagescroll', setNeedDisplay)
      }
    }
  }, [])

  useEffect(() => {
    if (sort.key) {
      onChange?.(getData())
    }
  }, [sort.key, sort.sort])

  /**
   * Render Data
   */
  return (
    <table {...attributes} {...events} ref={tableRef} css={classes.container}>
      <thead>
        <tr>
          {columns.map((column, colIndex) => (
            <TableHeadCell
              key={colIndex}
              styles={classes}
              column={column}
              toggleSort={toggleSort}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rowCtx.map((rowCtxItem, rowIndex) => {
          if (pagination) {
            const { pageSize } = pagination
            const startIndex = pageSize * (currentPage - 1)
            if (startIndex > rowIndex || rowIndex >= currentPage * pageSize) {
              return null
            }
          }
          /**
           * Row events map
           */
          const currentEvents: Types.RowEvents<Row> = {}
          /**
           * We'll call onRow*Event* at on*Event*
           * with injected rowIndex.
           */
          Object.keys(props)
            .filter((key) => /onRow/.exec(key))
            .forEach((key) => {
              currentEvents[key.replace('Row', '')] = (
                e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
              ) => {
                return props[key as Stage.FilterStartingWith<keyof typeof props, 'onRow'>]?.(
                  rowCtxItem,
                  e,
                )
              }
            })

          return (
            <TableRow
              rowCtxItem={rowCtxItem}
              getCellContext={getCellContext}
              rowDidMount={props.rowDidMount}
              rowDidUnmount={props.rowDidUnmount}
              styles={classes}
              key={rowIndex}
              columns={columns}
              rowIndex={rowIndex}
              events={events}
              rowMountType={props.rowMountType}
              enableRenderOptimization={enableRenderOptimization}
              delegates={{
                rowHeight: props.rowHeight,
                rowShouldRender: props.rowShouldRender,
              }}
              dndRender={dndRender}
            />
          )
        })}
      </tbody>
      <TableFoot
        rowCtx={rowCtx}
        styles={classes}
        footerContent={footer}
        columns={columns}
        pagination={pagination}
        onPageChange={setCurrentPage}
      />
    </table>
  )
}

export default forwardRef(Table as any) as <Row extends Types.RowType>(
  props: Types.Props<Row>,
  ref: Types.TableRef<Row>,
) => React.ReactElement
