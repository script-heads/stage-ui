import SystemTypes from '@flow-ui/system/types'
import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
declare namespace TableTypes {

    type RowMountType =
        /**
         * Render all rows at onec
         */
        'default' |
        /**
         * Render row only when it become visible
         */
        'whenBecomeVisible' |
        /**
         * Render row when it become visible
         * and unmount when row away from screen
         */
        'onlyWhenVisible'

    type TableCellKey = number | string
    type TableSortType = 'ASC' | 'DESC'
    type TableSortObject = {
        key: TableCellKey
        sort: TableSortType
    }
    type TablePaginationOptions = {
        pageSize: number
        alwaysVisible?: boolean
    }

    interface TableCellContext {
        /**
         * Current cell key
         */
        key: TableCellKey
        /**
         * Current row index
         */
        index: number
        /**
         * Current row data
         */
        row: Object
        /**
         * Link on column configuration
         */
        column: TableColumn | null
        /**
         * Raw data of cell
         */
        value?: React.ReactNode | string | number | null
        /**
         * Is current cell in modify mode
         */
        isModify: boolean
        /**
         * Is current row expanded
         */
        isExpand: boolean
        /**
         * If row visible on screen
         */
        isVisible: boolean
        /**
         * Set expanded ReactNode below current row
         */
        setExpand: (el: React.ReactNode | null) => boolean
        /**
         * Set modify mode for this cell
         */
        setModify: (modify: boolean, key?: TableCellKey) => boolean
        /**
         * Reload all data in table
         */
        reloadData: () => void
    }

    type RowContext = {
        /**
         * Row data
         */
        row: Object
        /**
         * true if element expanded
         * @default false
         */
        isExpand: boolean
        /**
         * true if element visible
         * @default false
         */
        isVisible: boolean
        /**
         * keys of cells that in modify mode
         */
        isCellModify: {
            [key: string]: boolean
        }
        /**
         * Settings cells for modify
         * void 0 - changes all row
         */
        setModifyState: {
            [key: string]: React.Dispatch<React.SetStateAction<boolean>>
        }
        /**
         * Setting expand for row
         */
        setExpandComponent?: React.Dispatch<React.SetStateAction<React.ReactNode>>
        /**
         * Forcing render row
         */
        setNeedDisplay?: (forceUnmount?: boolean) => boolean
    }

    interface Ref extends TableRef, HTMLTableElement { }

    interface TableRef {
        /**
         * Get context for specific cell
         */
        getCellContext: (index: number, key: TableCellKey) => TableCellContext | null
        /**
         * Set expanded ReactNode below row index
         * @returns true if success
         */
        setExpand: (index: number, content: React.ReactNode | null) => boolean
        /**
         * Set modify mode for specific row or cell
         * @returns true if success
         */
        setModify: (modify: boolean, index: number, key?: TableCellKey) => boolean
    }

    interface TableColumn {
        /**
         * Unique key of row like id/name or something like that
         */
        key: TableCellKey
        /**
         * Title that will be placed at TableHead
         */
        title?: string
        /**
         * Specific width of column
         */
        width?: number | string
        /**
         * Custom render for a TableCell
         */
        render?: (cellContext: TableCellContext, index: number) => void
        /**
         * Enables sorting for a column
         * support ASC | DESC
         */
        sort?: TableSortType
    }

    interface RowEvents {
        /**
         * Calls when ever row clicked
         */
        onRowClick?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
        /**
         * Calls when mouse enters row
         */
        onRowMouseEnter?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
        /**
         * Calls when mouse leaves row
         */
        onRowMouseLeave?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
    }

    interface RowDelegates {
        /**
         * Delegate tells to TableRow what size it is.
         * Required when rowMountType not default
         */
        rowHeight?: (rowCtxItem: RowContext) => number
        /**
         * Delegate tells TableRow render or not
         */
        rowShouldRender?: (rowCtxItem: RowContext) => boolean
    }
    interface Props extends RowEvents, RowDelegates, SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * Array of any data objects can be provided
         */
        data: Object[]
        /**
         * Settings of columns
         */
        columns: TableColumn[]
        /**
         * Applies decoration on table
         * @default surface
         */
        decoration?: LayoutDecoration
        /**
         * Pagination settings
         */
        pagination?: TablePaginationOptions
        /**
         * React element will be placed at footer
         */
        footer?: React.ReactNode
        /**
         * How Table will render rows. 
         * any type except 'default' requires rowHeight delegate!
         * 
         * default - Render all rows at once. 
         * whenBecomeVisible - Render row only when it become visible. 
         * onlyWhenVisible - Render row when it become visible and unmount when row away from screen. 
         * 
         * @default default
         */
        rowMountType?: RowMountType
    }

    interface HeadCellProps {
        column: TableColumn
        styles: SystemTypes.ComponentStyles<Styles>
        setSort: React.Dispatch<React.SetStateAction<TableSortObject>>
    }

    interface CellProps {
        rowCtxItem: RowContext
        column: TableColumn
        rowIndex: number
        styles: SystemTypes.ComponentStyles<Styles>
        getCellContext: TableRef['getCellContext']
    }

    interface RowProps {
        rowCtxItem: RowContext
        columns: TableColumn[]
        rowIndex: number
        styles: SystemTypes.ComponentStyles<Styles>
        getCellContext: TableRef['getCellContext']
        events: RowEvents
        rowMountType?: Props['rowMountType']
        enableRenderOptimization: boolean
        delegates: {
            rowHeight?: Props['rowHeight']
            rowShouldRender?: Props['rowShouldRender']

        }
    }

    interface FootProps {
        rowCtx: RowContext[]
        columns: TableColumn[]
        footerContent?: Props['footer']
        pagination?: TablePaginationOptions
        onPageChange: (pageNumber: number) => void
        styles: SystemTypes.ComponentStyles<Styles>
    }

    interface Styles {
        /**
         * Root view
         */
        container: void
        /**
         * Header cell element view <th>
         */
        headCell: {
            sort: boolean
        }
        /**
         * Row view <tr>
         */
        row: void
        /**
         * Row cell <td>
         */
        rowCell: void
        /**
         * Expanded row <td span>
         */
        expandContainer: void
        /**
         * Footer view of table
         */
        footer: void
    }
}

export default TableTypes