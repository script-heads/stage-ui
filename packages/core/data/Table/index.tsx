/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-for-of-loops/no-for-of-loops */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import { isBrowser, useSystem } from '@stage-ui/system'

import Checkbox from '../../control/Checkbox'

import styles from './styles'
import TableFoot from './TableFoot'
import TableHeadCell from './TableHeadCell'
import TableRow from './TableRow'
import Types from './types'

function Table(props: Types.Props, ref: React.ForwardedRef<Types.Ref>) {
  const {
    classes,
    attributes,
    events: { onChange, onRowClick, onRowDoubleClick, onCheckboxClick, ...events },
    styleProps,
  } = useSystem('Table', props, styles)
  const {
    columns,
    pagination,
    footer,
    data,
    selected,
    rowHeight,
    rowShouldRender,
    rowMountType,
    rowDidMount,
    rowDidUnmount,
    dataKey,
  } = props

  const [primaryKey, setPrimaryKey] = useState<Types.TableCellKey>('')

  const [currentPage, setCurrentPage] = useState(1)
  const [reloadData, reload] = useState(false)
  const [sort, setSort] = useState<Types.TableSortObject>({
    key: '',
    sort: 'ASC',
  })

  const selectedSet = useMemo(
    () =>
      new Set<string | number>(
        (selected || []).map((s) => s[primaryKey] as string | number),
      ),
    [selected, primaryKey],
  )

  const mapRowContext = (row: Types.Row): Types.TableRowContext => {
    const isCellModify: Types.TableRowContext['isCellModify'] = {}
    columns.forEach((column) => {
      isCellModify[column.key] = false
    })

    let isSelected: Types.TableCellContext['isSelected'] = false

    if (Array.isArray(selected) && primaryKey) {
      isSelected = selectedSet.has(row[primaryKey] as string | number)
    }

    return {
      row,
      isExpand: false,
      isVisible: true,
      isCellModify,
      isSelected,
      setModifyState: {},
    }
  }

  const rowCtx = useMemo(() => {
    const rows = data.slice().map(mapRowContext)

    if (!sort.key) return rows

    return rows.sort((a, b) => {
      const aValue = a.row[sort.key] as string | number
      const bValue = b.row[sort.key] as string | number

      if (sort.sort === 'ASC') {
        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue as string)
        }
        return aValue - (bValue as number)
      }

      if (sort.sort === 'DESC') {
        if (typeof bValue === 'string') {
          return bValue.localeCompare(aValue as string)
        }
        return bValue - (aValue as number)
      }

      return 0
    })
  }, [data, selected, columns, primaryKey, sort])

  /**
   * Getting current data state
   */
  const getData = () => rowCtx.map((currentRowCtx) => currentRowCtx.row)

  /**
   * Soring column by its settings
   */
  const toggleSort = (value: Types.TableSortObject) => {
    return new Promise((resolve) => {
      const column = columns.find((currentColumn) => currentColumn.key === value.key)
      if (column) {
        if (typeof column.sort === 'function') {
          column.sort(value.sort).then(() => {
            setSort(value)
            resolve(undefined)
          })
        } else {
          setSort(value)
          resolve(undefined)
        }
      }
    })
  }

  const setExpand: Types.Methods['setExpand'] = (index, content) => {
    if (rowCtx[index]) {
      rowCtx[index].setExpandComponent?.(content)
      return true
    }
    return false
  }

  const setModify: Types.Methods['setModify'] = (modify, index, key) => {
    if (rowCtx[index]) {
      if (key !== undefined) {
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

  const getCellContext: Types.Methods['getCellContext'] = (index, key) => {
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
      isSelected: rowCtx[index].isSelected,
      setExpand: (content) => setExpand(index, content),
      setModify: (modify, kkey = key) => setModify(modify, index, kkey),
      reloadData: () => reload(!reloadData),
      setRow: (row) => {
        for (const rowKey in rowCtx[index].row) {
          rowCtx[index].row[rowKey] = row[rowKey]
        }
        reload(!reloadData)
      },
      isCellModify: false,
    }
  }

  const setNeedDisplay = () => {
    let state = 1
    for (const rowCtxItem of rowCtx) {
      const didRender = rowCtxItem.setNeedDisplay?.(state === 3)
      if (didRender) {
        state = 2
      } else if (state === 2) state = 3
    }
  }

  const enableRenderOptimization = !!rowMountType?.match('Visible')

  useEffect(() => {
    /**
     * Handle optimized method of render
     */
    if (enableRenderOptimization && isBrowser) {
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

    if (Array.isArray(selected)) {
      const keys = columns.filter((c) => c.primary)
      if (keys.length === 1) {
        setPrimaryKey(keys[0].key)
      } else {
        console.warn('You should assign only 1 column to primary key!')
      }
    }
  }, [])

  useEffect(() => {
    if (sort.key) {
      onChange?.(getData())
    }
  }, [sort.key, sort.sort])

  const tableElementRef = useRef<HTMLTableElement>(null)

  useImperativeHandle(ref, () => ({
    getData,
    getCellContext,
    setExpand,
    setModify,
    ...(tableElementRef.current as HTMLTableElement),
  }))

  const handleSelectAll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCheckboxClick?.(
      rowCtx.every((s) => s.isSelected) ? rowCtx : rowCtx.filter((r) => !r.isSelected),
      e,
    )
  }

  return (
    <table
      {...attributes}
      {...events}
      ref={tableElementRef}
      css={[classes.container, styleProps.all]}
    >
      <thead>
        <tr>
          {onCheckboxClick && (
            <th css={[classes.headCell({ sort: false }), { width: '0' }]}>
              <Checkbox
                onClick={handleSelectAll}
                disabled={!rowCtx.length}
                checked={rowCtx.length > 0 && rowCtx.every((s) => s.isSelected)}
                half={rowCtx.length > 0 && rowCtx.some((s) => s.isSelected)}
              />
            </th>
          )}
          {columns.map((column, columnIndex) => (
            <TableHeadCell
              key={column.key || columnIndex.toString()}
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
          const currentEvents: Record<
            string,
            React.MouseEventHandler<HTMLTableRowElement>
          > = {}
          /**
           * We'll call onRow*Event* at on*Event*
           * with injected rowIndex.
           */
          Object.keys(props)
            .filter((key) => /onRow/.exec(key))
            .forEach((key) => {
              currentEvents[key.replace('Row', '')] = (
                e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
              ) =>
                // eslint-disable-next-line react/destructuring-assignment
                props[key as Stage.FilterStartingWith<keyof typeof props, 'onRow'>]?.(
                  rowCtxItem,
                  e,
                )
            })

          return (
            <TableRow
              key={
                dataKey
                  ? rowCtxItem.row[dataKey]
                  : rowCtxItem.row.id || rowIndex.toString()
              }
              rowCtxItem={rowCtxItem}
              getCellContext={getCellContext}
              rowDidMount={rowDidMount}
              rowDidUnmount={rowDidUnmount}
              styles={classes}
              columns={columns}
              rowIndex={rowIndex}
              events={currentEvents}
              onCheckboxClick={
                onCheckboxClick ? (e) => onCheckboxClick([rowCtxItem], e) : undefined
              }
              rowMountType={rowMountType}
              enableRenderOptimization={enableRenderOptimization}
              delegates={{
                rowHeight,
                rowShouldRender,
              }}
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

export default forwardRef(Table) as <Row extends Types.Row>(
  props: Types.Props<Row> & { ref?: React.ForwardedRef<Types.Ref<Row>> },
) => React.ReactElement
