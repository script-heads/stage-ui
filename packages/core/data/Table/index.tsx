/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
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

function Table<ROW>(props: Types.Props<ROW>, ref: Types.TableRef<ROW>) {

// const Table: ForwardRefRenderFunction<Types.TableRef, Types.Props> = (props, ref) => {

    const tableRef = useRef<HTMLTableElement>(null)
    const { cs, attributes, events } = useComponent('Table', { props, styles, styleProps: { container: ['all'] } })
    const { columns, pagination, footer } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [reloadData, reload] = useState(false)
    const [sort, setSort] = useState<Types.TableSortObject>({
        key: '',
        sort: 'ASC'
    })
    
    const isDraggableSupport = !!columns.find(column => column.dnd)

    const mapRowContext = (row: any) => {
        const isCellModify: Types.TableRowContext<ROW>['isCellModify'] = {}
        columns.forEach(column => {
            isCellModify[column.key] = false
        })
        return {
            row,
            isExpand: false,
            isVisible: true,
            isCellModify,
            setModifyState: {}
        }
    }
    /**
     * TODO: issue with dragbale
     * if dnd enabled then controlled data
     * will not work and vice versa
     */
    let rowCtx = isDraggableSupport
        ? useMemo(() => (props.data as any).map(mapRowContext), [])
        : (props.data.slice() as any).map(mapRowContext)

        /**
     * Getting current data state
     */
    const getData = () => rowCtx.map((rowCtx: any) => rowCtx.row)

    /**
     * Soring column by its settings
     */
    const columnSort = (value: Types.TableSortObject) => {
        if (value.sort) {
            rowCtx = rowCtx.sort((a, b) => {
                if (value.sort === 'ASC') {
                    if (typeof a.row[value.key] === 'string') {
                        return a.row[value.key].localeCompare(b.row[value.key])
                    } else {
                        return a.row[value.key] - b.row[value.key]
                    }
                } else {
                    if (typeof b.row[value.key] === 'string') {
                        return b.row[value.key].localeCompare(a.row[value.key])
                    } else {
                        return b.row[value.key] - a.row[value.key]
                    }
                }
            })
        }
    }

    const toggleSort = (value: Types.TableSortObject) => {
        const column = columns.find(column => column.key === value.key)
        if (column) {
            if (typeof column.sort === 'function') {
                return column.sort(value.sort)
            } else {
                setSort(value)
            }
        }
        return
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
            props.onChange?.(data)
        }, 0)
        reload(!reloadData)
    }

    //@ts-ignore
    const getCellContext: Types.TableRef<ROW>['getCellContext'] = (index, key) => {

        if (!rowCtx[index]?.row) {
            return null
        }

        return {
            key,
            index: index,
            row: rowCtx[index].row,
            column: columns.find(column => column.key === key) || null,
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
            }
        }
    }

    const setExpand: Types.TableRef<ROW>['setExpand'] = (index, content) => {
        if (rowCtx[index]) {
            rowCtx[index].setExpandComponent?.(content)
            return true
        }
        return false
    }

    const setModify: Types.TableRef<ROW>['setModify'] = (modify, index, key) => {
        if (rowCtx[index]) {
            if (key !== undefined) {
                //@ts-ignore
                if (rowCtx[index].row.hasOwnProperty(key)) {
                    rowCtx[index].setModifyState[key]?.(modify)
                    return true
                }
            }
            Object.keys(rowCtx[index].isCellModify).forEach(key => {
                rowCtx[index].setModifyState[key]?.(modify)
            })
            return true
        }
        return false
    }

    /**
     * Handle refs
     */
    //@ts-ignore
    useImperativeHandle(ref, () => ({
        getCellContext,
        setExpand,
        setModify,
        getData,
        ...tableRef.current
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
        for (let rowCtxItem of rowCtx) {
            const didRender = rowCtxItem.setNeedDisplay?.(state === 3)
            if (didRender) {
                state = 2
            } else {
                if (state === 2) state = 3
            }
        }
    }

    const enableRenderOptimization = props.rowMountType?.match('Visible') ? true : false

    useEffect(() => {
        /**
         * Handle optimized method of render
         */
        if (enableRenderOptimization) {
            setNeedDisplay()
            document.addEventListener('resize', setNeedDisplay)
            document.addEventListener('scroll', setNeedDisplay)
            document.addEventListener('onflowscroll', setNeedDisplay)
            return () => {
                document.removeEventListener('resize', setNeedDisplay)
                document.removeEventListener('scroll', setNeedDisplay)
                document.removeEventListener('onflowscroll', setNeedDisplay)
            }
        }
        return
    }, [])

    useEffect(() => {
        if (sort.key) {
            props.onChange?.(getData())
        }
    }, [sort.key, sort.sort])

    /**
     * Render Data
     */
    return (
        <table {...attributes} {...events.all} ref={tableRef} css={cs.container}>
            <thead>
                <tr
                    children={
                        columns.map((column, colIndex) => (
                            <TableHeadCell
                                key={colIndex}
                                styles={cs}
                                column={column}
                                toggleSort={toggleSort}
                            />
                        ))
                    }
                />
            </thead>
            <tbody
                children={
                    rowCtx.map((rowCtxItem, rowIndex) => {
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
                        const events: Types.RowEvents<ROW> = {
                        }
                        /**
                         * We'll call onRow*Event* at on*Event*
                         * with injected rowIndex.
                         */
                        Object.keys(props).forEach(key => {
                            if (key.match('onRow')) {
                                events[key.replace('Row', '')] = (e: MouseEvent) => {
                                    return props[key](rowCtxItem, e)
                                }
                            }
                        })

                        return (
                            <TableRow
                                rowCtxItem={rowCtxItem}
                                getCellContext={getCellContext}
                                rowDidMount={props.rowDidMount}
                                rowDidUnmount={props.rowDidUnmount}
                                styles={cs}
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
                    })
                }
            />
            <TableFoot
                rowCtx={rowCtx}
                styles={cs}
                footerContent={footer}
                columns={columns}
                pagination={pagination}
                onPageChange={setCurrentPage}
            />
        </table>
    )
}

export default forwardRef(Table as any) as <ROW>(props: Types.Props<ROW>, ref: Types.TableRef<ROW>) => React.ReactElement