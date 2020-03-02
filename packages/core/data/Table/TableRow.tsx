import React, { Fragment, useEffect, forwardRef, RefForwardingComponent, useImperativeHandle, useRef, useState } from 'react'
import TableCell from './TableCell'
import Types from './types'

const TableRow: RefForwardingComponent<HTMLTableRowElement, Types.RowProps> = (props, ref) => {
    const { columns, rowIndex, dcItem, styles, getCellContext } = props
    const style: React.CSSProperties = {}
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
    
    let experimental_rowId: string | undefined

    const [
            experimental_needDisplay, 
            experimental_setNeedDisplayState
    ] = useState(props.experimental === undefined)

    if (props.experimental) {
        const height = props.experimental.tableRowHeight(dcItem)
        style.height = height + 'px'

        const setNeedDisplay = () => {
            let needDisplay = false
            const element = document.getElementById(experimental_rowId as string)
            if (element) {
                const position = element.getBoundingClientRect()
                if (position.top + height * 2 >= 0 && position.top - height <= window.innerHeight) {
                    needDisplay = true
                    experimental_setNeedDisplayState(true)
                } else if (props.experimental?.renderType === 'mountUnmount') {
                    experimental_setNeedDisplayState(false)
                }
            }
            return needDisplay
        }
        
        experimental_rowId = React.useMemo(() => 'tr' + rowIndex + '_' + (~~(Math.random()*1e8)).toString(16), [])   
        //@ts-ignore
        dcItem.experimental = {
            setNeedDisplay
        }
    }

    return (
        <Fragment>
            <tr
                id={experimental_rowId}
                {...props.events}
                ref={ref}
                css={styles.row}
                key={rowIndex}
                style={style}
                children={
                    experimental_needDisplay
                        ? columns.map((column, columnIndex) => (
                            <TableCell
                                dcItem={dcItem}
                                getCellContext={getCellContext}
                                styles={styles}
                                key={columnIndex}
                                column={column}
                                rowIndex={rowIndex}
                            />
                        ))
                        : null
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