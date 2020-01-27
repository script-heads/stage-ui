import React, { Fragment, forwardRef, RefForwardingComponent, useState } from 'react'
import TableCell from './TableCell'
import Types from './types'

const TableRow: RefForwardingComponent<HTMLTableDataCellElement, Types.RowProps> = (props, ref) => {
    const { columns, rowIndex, dc, styles, getCellContext } = props

    /**
     * State with expanded row
     * if null then DataCollection isExpand will be false
     */
    const [expandComponent, setExpandComponent] = useState<React.ReactNode>(null)

    /**
     * Update DataCollection state
     */
    dc.setExpandComponent = setExpandComponent
    dc.isExpand = Boolean(expandComponent)

    return (
        <Fragment>
            <tr
                css={styles.row}
                key={rowIndex}
                children={
                    columns.map(column => (
                        <TableCell
                            dc={dc}
                            getCellContext={getCellContext}
                            styles={styles}
                            key={rowIndex}
                            column={column}
                            rowIndex={rowIndex}
                        />
                    ))
                }
            />
            {expandComponent && (
                <tr>
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