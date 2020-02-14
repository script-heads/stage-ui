import WhaleTypes from '@flow-ui/whale/types'
import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
declare namespace TableTypes {

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

    type DataCollection = {
        row: Object
        isExpand: boolean
        isVisible: boolean
        isCellModify: { 
            [key: string]: boolean 
        }
        setModifyState: { 
            [key: string]: React.Dispatch<React.SetStateAction<boolean>> 
        }
        setExpandComponent?: React.Dispatch<React.SetStateAction<React.ReactNode>>
    }

    interface Ref extends TableRef, HTMLTableElement {

    }

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
        key: TableCellKey
        title?: string
        width?: number | string
        render?: (cellContext: TableCellContext, index: number) => void
        sort?: TableSortType
    }

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        data: Object[]
        columns: TableColumn[]
        decoration?: LayoutDecoration
        pagination?: TablePaginationOptions
        footer?: React.ReactNode
    }

    interface HeadCellProps {
        column: TableColumn
        styles: WhaleTypes.ComponentStyles<Overrides>
        setSort: React.Dispatch<React.SetStateAction<TableSortObject>>
    }

    interface CellProps {
        dcItem: DataCollection
        column: TableColumn
        rowIndex: number
        styles: WhaleTypes.ComponentStyles<Overrides>
        getCellContext: TableRef['getCellContext']
    }

    interface RowProps {
        dcItem: DataCollection
        columns: TableColumn[]
        rowIndex: number
        styles: WhaleTypes.ComponentStyles<Overrides>
        getCellContext: TableRef['getCellContext']
    }

    interface FootProps {
        dc: DataCollection[]
        columns: TableColumn[]
        footerContent?: Props['footer']
        pagination?: TablePaginationOptions
        onPageChange: (pageNumber: number) => void
        styles: WhaleTypes.ComponentStyles<Overrides>
    }

    interface Overrides {
        container: void
        headCell: {
            sort: boolean
        }
        row: void
        rowCell: void
        expandContainer: void
        footer: void
    }
}

export default TableTypes