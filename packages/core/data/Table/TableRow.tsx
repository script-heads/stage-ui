import React, { Fragment, useEffect, forwardRef, RefForwardingComponent, useState } from 'react'
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
        experimental_rowId = React.useMemo(() => (+new Date).toString(16), [])   
        style.height = props.experimental.tableRowHeight(dcItem) + 'px'
    }

    const setNeedDisplay = () => {
        const element = document.getElementById(experimental_rowId as string)
        if (element) {
            let needDisplay = false
            const position = element.getBoundingClientRect()
            // checking whether fully visible
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                needDisplay = true
            }
            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0) {
                needDisplay = true
            }
            if (needDisplay || props.experimental?.renderType === 'mountUnmount') {
                experimental_setNeedDisplayState(needDisplay)
            }
        }
    }

    useEffect(() => {
        if (props.experimental) {
            setNeedDisplay()
            document.addEventListener('resize', setNeedDisplay)
            document.addEventListener('scroll', setNeedDisplay)
            document.addEventListener('onflowscroll', setNeedDisplay)
        }
        return () => {
            if (props.experimental) {
                document.removeEventListener('resize', setNeedDisplay)
                document.removeEventListener('scroll', setNeedDisplay)
                document.removeEventListener('onflowscroll', setNeedDisplay)
            }
        }
    }, [])

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