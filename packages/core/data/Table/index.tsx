import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent,useRef, useImperativeHandle } from 'react'
import styles from './styles'
import Types from './types'
import TableRow from './TableRow'

type Ref = Types.TableRef

const Table: RefForwardingComponent<Ref, Types.Props> = (props, ref) => {

    const tableRef = useRef<HTMLTableElement>(null)
    const { css, attributes } = useComponent('Table', { props, styles })
    const { columns } = props
    
    const dc: Types.DataCollection[] = props.data.map(row => {
        const isCellModify: Types.DataCollection['isCellModify'] = {}
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
    })

    const getCellContext: Ref['getCellContext'] = (index, key) => {

        if (!dc[index]?.row) {
            return null
        }
        
        return {
            key,
            index: index,
            row: dc[index].row,
            column: columns.find(column => column.key === key) || null,
            value: dc[index].row[key],
            isExpand: dc[index].isExpand,
            isModify: dc[index].isCellModify[key],
            isVisible: dc[index].isVisible,
            setExpand: (content) => setExpand(index, content),
            setModify: (modify, kkey = key) => setModify(modify, index, kkey),
        }
    }

    const setExpand: Ref['setExpand'] = (index, content) => {
        if (dc[index]) {
            dc[index].setExpandComponent?.(content)
            return true
        }
        return false
    } 

    const setModify: Ref['setModify'] = (modify, index, key) => {
        if (dc[index]) {
            if (key !== undefined) {
                if (dc[index].row.hasOwnProperty(key)) {
                    dc[index].setModifyState[key]?.(modify)
                    return true
                }
            } else {
                Object.keys(dc[index].isCellModify).forEach(key => {
                    dc[index].setModifyState[key]?.(modify)
                })
                return true
            }
        }
        return false
    }

    useImperativeHandle(ref, () => ({
        getCellContext,
        setExpand,
        setModify,
        ...tableRef.current
    }))

    return (
        <table ref={tableRef} css={css.container} {...attributes}>
            <thead>
                <tr
                    children={
                        columns.map((col, colIndex) => (
                            <th
                                css={css.headCell}
                                key={colIndex}
                                children={col.title}
                            />
                        ))
                    }
                />
            </thead>
            <tbody
                children={
                    dc.map((data, rowIndex) => (
                        <TableRow
                            dc={data}
                            getCellContext={getCellContext}
                            styles={css}
                            key={rowIndex}
                            columns={columns}
                            rowIndex={rowIndex}
                        />
                    ))
                }
            />
        </table>
    )
}

export default forwardRef(Table)