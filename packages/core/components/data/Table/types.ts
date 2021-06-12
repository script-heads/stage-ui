import { ContainerDecorations } from '@stage-ui/core/utils/containerDecorations'
import { Classes as ClassesType } from '@stage-ui/system/hooks/useSystem'

declare namespace TableTypes {
  type RowType = Object
  type RowMountType =
    /**
     * Render all rows at onec
     */
    | 'default'
    /**
     * Render row only when it become visible
     */
    | 'whenBecomeVisible'
    /**
     * Render row when it become visible
     * and unmount when row away from screen
     */
    | 'onlyWhenVisible'

  type TableCellKey = number | string
  type TableSortType = 'ASC' | 'DESC'
  type TableSortAsync = (sortType: TableSortType) => Promise<void>
  type TableSortObject = {
    key: TableCellKey
    sort: TableSortType
  }
  type TablePaginationOptions = {
    pageSize: number
    alwaysVisible?: boolean
  }

  interface TableCellContext<Row extends RowType> {
    /**
     * Current cell key
     * @readonly
     */
    key: TableCellKey
    /**
     * Current row index
     * @readonly
     */
    index: number
    /**
     * Current row data
     * @readonly
     */
    row: Row
    /**
     * Link on column configuration
     * @readonly
     */
    column: TableColumn<Row> | null
    /**
     * Raw data of cell
     * @readonly
     */
    value?: React.ReactNode | string | number | null
    /**
     * Is current cell in modify mode
     * @readonly
     */
    isModify: boolean
    /**
     * Is current cell in modify mode
     * @readonly
     */
    isCellModify: boolean
    /**
     * Is current row expanded
     * @readonly
     */
    isExpand: boolean
    /**
     * If row visible on screen
     * @readonly
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
    /**
     * Set row data and reload all data in table
     */
    setRow: (row: Row) => void
  }

  type TableRowContext<Row extends RowType> = {
    /**
     * Row data
     */
    row: Row
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
     * undefined - changes all row
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

  interface Ref<Row extends RowType> extends TableRef<Row>, HTMLTableElement {}

  interface TableRef<Row extends RowType> {
    /**
     * Get table current data
     */
    getData: () => Row[]
    /**
     * Get context for specific cell
     */
    getCellContext: (index: number, key: TableCellKey) => TableCellContext<Row> | null
    /**
     * Get context for specific row
     */
    getTableRowContext: (index: number) => TableCellContext<Row> | null
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

  interface TableColumn<Row extends RowType> {
    /**
     * Unique key of row like id/name or something like that
     */
    key: TableCellKey
    /**
     * Title that will be placed at TableHead
     */
    title?: React.ReactNode
    /**
     * Specific width of column
     */
    width?: number | string
    /**
     * Custom render for a TableCell
     */
    render?: (cellContext: TableCellContext<Row>, index: number) => React.ReactNode
    /**
     * Enables sorting for a column
     * support ASC | DESC
     */
    sort?: TableSortType | TableSortAsync
    /**
     * Draggable support
     */
    dnd?: (source: number, target: number, data: Row[]) => void
  }

  interface RowEvents<Row extends RowType> {
    /**
     * Calls when ever row clicked
     */
    onRowClick?: (rowCtxItem: TableRowContext<Row>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
    /**
     * Calls when mouse enters row
     */
    onRowMouseEnter?: (
      rowCtxItem: TableRowContext<Row>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    /**
     * Calls when mouse leaves row
     */
    onRowMouseLeave?: (
      rowCtxItem: TableRowContext<Row>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void

    onRowDrag?: (rowCtxItem: TableRowContext<Row>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void
    onRowDragStart?: (
      rowCtxItem: TableRowContext<Row>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    onRowDragEnter?: (
      rowCtxItem: TableRowContext<Row>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    onRowDragLeave?: (
      rowCtxItem: TableRowContext<Row>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
  }

  interface RowDelegates<Row extends RowType> {
    /**
     * Delegate tells to TableRow what size it is.
     * Required when rowMountType not default
     */
    rowHeight?: (rowCtxItem: TableRowContext<Row>) => number
    /**
     * Delegate tells TableRow render or not
     */
    rowShouldRender?: (rowCtxItem: TableRowContext<Row>) => boolean
  }

  interface Props<Row extends RowType>
    extends RowEvents<Row>,
      RowDelegates<Row>,
      Stage.AllProps<HTMLDivElement, Classes> {
    ref?: any
    /**
     * Array of any data objects can be provided
     */
    data: Array<Row>
    /**
     * Settings of columns
     */
    columns: TableColumn<Row>[]
    /**
     * Applies decoration on table
     * @default surface
     */
    decoration?: ContainerDecorations
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
    rowDidMount?: (rowCtxItem: TableRowContext<Row>) => void
    rowDidUnmount?: (rowCtxItem: TableRowContext<Row>) => void
    /**
     * calls data changed by table
     */
    onChange?: (data: Row[]) => void
  }

  interface HeadCellProps<Row extends RowType> {
    column: TableColumn<Row>
    styles: ClassesType<Classes>
    toggleSort: (sort: TableSortObject) => Promise<unknown>
  }

  interface CellProps<Row extends RowType> {
    rowCtxItem: TableRowContext<Row>
    column: TableColumn<Row>
    rowIndex: number
    styles: ClassesType<Classes>
    getCellContext: TableRef<Row>['getCellContext']
  }

  interface RowProps<Row> {
    rowCtxItem: TableRowContext<Row>
    columns: TableColumn<Row>[]
    rowIndex: number
    styles: ClassesType<Classes>
    getCellContext: TableRef<Row>['getCellContext']
    events: RowEvents<Row>
    rowDidMount?: (rowCtxItem: TableRowContext<Row>) => void
    rowDidUnmount?: (rowCtxItem: TableRowContext<Row>) => void
    rowMountType?: Props<Row>['rowMountType']
    enableRenderOptimization: boolean
    delegates: {
      rowHeight?: Props<Row>['rowHeight']
      rowShouldRender?: Props<Row>['rowShouldRender']
    }
    dndRender: () => void
  }

  interface FootProps<Row> {
    rowCtx: TableRowContext<Row>[]
    columns: TableColumn<Row>[]
    footerContent?: Props<Row>['footer']
    pagination?: TablePaginationOptions
    onPageChange: (pageNumber: number) => void
    styles: ClassesType<Classes>
  }

  type Classes = {
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
    row: {
      dragOver: boolean
    }
    /**
     * Row cell <td>
     */
    rowCell: void
    /**
     * Row cell drag anchor <div>
     */
    rowCellAnchor: void
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
