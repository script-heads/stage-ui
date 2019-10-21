import React from 'react';
import TableTypes from './types'
import TableColumns from './TableColumns'
import TableForm from './TableForm'
import TableActions from './TableActions'

const TableRow = (props: TableTypes.RowProps) => {

    const { row, actions, columns, form, onRowClick, style } = props
    const styles = props.styles

    if (form) {
        return TableForm({ dismiss: form.dismiss, Form: form.render, columns, row })
    }
    return (
        <div css={styles.row({edited: false, withActions: actions && actions.length > 0})} style={style} onClick={() => onRowClick && onRowClick(row)}>
            <TableColumns
                columns={props.columns}
                row={props.row}
                scope={props.scope}
                styles={styles}
            />
            {actions && <TableActions actions={actions} data={row} styles={styles} />}
        </div>

    )
}
export default TableRow