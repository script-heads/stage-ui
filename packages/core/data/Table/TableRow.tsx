import React, { Fragment, useEffect, forwardRef, RefForwardingComponent, useImperativeHandle, useRef, useState } from 'react'
import TableCell from './TableCell'
import Types from './types'

const TableRow: RefForwardingComponent<HTMLTableRowElement, Types.RowProps> = (props, ref) => {
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

    if (props.enableRenderOptimization) {
        const height = props.delegates.rowHeight?.(rowCtxItem)
        if (typeof height === 'number') {
            style.height = height + 'px'
            rowId = React.useMemo(() => 'tr' + rowIndex + '_' + (~~(Math.random() * 1e8)).toString(16), [])
            rowCtxItem.setNeedDisplay = (forceUnmount?: boolean) => {
                if (forceUnmount) {
                    if (needDisplay) {
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
                        setNeedDisplay(true)
                    } else if (props.rowMountType === 'onlyWhenVisible') {
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
        <Fragment>
            {needDisplay
                ? (
                    <Fragment>
                        <tr
                            id={rowId}
                            style={style}
                            {...props.events}
                            ref={ref}
                            css={styles.row}
                            key={rowIndex}
                            children={
                                columns.map((column, columnIndex) => (
                                    <TableCell
                                        rowCtxItem={rowCtxItem}
                                        getCellContext={getCellContext}
                                        styles={styles}
                                        key={columnIndex}
                                        column={column}
                                        rowIndex={rowIndex}
                                    />
                                ))
                            }
                        />
                        {expandComponent && (
                            <tr ref={ref}>
                                <td
                                    css={styles.expandContainer}
                                    colSpan={columns.length}
                                    children={expandComponent}
                                />
                            </tr>
                        )}
                    </Fragment>
                )
                : <tr ref={ref} id={rowId} style={style} />
            }
        </Fragment>
    )
}

export default forwardRef(TableRow)