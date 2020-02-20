import React, { Fragment, forwardRef, RefForwardingComponent, useState } from 'react'
import TableCell from './TableCell'
import Types from './types'

const TableRow: RefForwardingComponent<HTMLTableRowElement, Types.RowProps> = (props, ref) => {
    const { columns, rowIndex, dcItem, styles, getCellContext } = props

    /**
     * State with expanded row
     * if null then DataCollection isExpand will be false
     */
    const [expandComponent, setExpandComponent] = useState<React.ReactNode>(null)

    /**
     * Update DataCollection state
     */
    dcItem.setExpandComponent = setExpandComponent
    dcItem.isExpand = Boolean(expandComponent)

    return (
        <Fragment>
            <tr
                {...props.events}
                ref={ref}
                css={styles.row}
                key={rowIndex}
                children={
                    columns.map((column, columnIndex) => (
                        <TableCell
                            dcItem={dcItem}
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
}

export default forwardRef(TableRow)