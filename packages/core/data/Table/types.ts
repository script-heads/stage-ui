import { ContainerDecorations } from '@stage-ui/core/utils/containerDecorations'
import { Classes as ClassesType } from '@stage-ui/system/hooks/useSystem'

declare namespace TableTypes {
  type Props<R extends Row = Row> = RowEvents<R> &
    RowDelegates<R> &
    Stage.AllProps<HTMLDivElement, Classes> & {
      /**
       * Array of any data objects can be provided
       */
      data: R[]
      /**
       * Array of any selected data objects
       */
      selected?: R[]
      /**
       * Settings of columns
       */
      columns: TableColumn<R>[]
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
      rowDidMount?: (rowCtxItem: TableRowContext<R>) => void
      rowDidUnmount?: (rowCtxItem: TableRowContext<R>) => void
      /**
       * calls data changed by table
       */
      onChange?: (data: R[]) => void
    }

  type Ref<R extends Row = Row> = HTMLTableElement &
    Omit<Methods<R>, 'getTableRowContext'>

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
      clickable: boolean
      selected: boolean
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Row = Record<string, any>

  type Methods<R extends Row = Row> = {
    /**
     * Get table current data
     */
    getData: () => R[]
    /**
     * Get context for specific cell
     */
    getCellContext: (index: number, key: TableCellKey) => TableCellContext<R> | null
    /**
     * Get context for specific row
     */
    getTableRowContext: (index: number) => TableCellContext<R> | null
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

  interface TableCellContext<R extends Row = Row> {
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
    row: R
    /**
     * Link on column configuration
     * @readonly
     */
    column: TableColumn<R> | null
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
     * Is current row selected
     * @readonly
     */
    isSelected: boolean
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
    setRow: (row: R) => void
  }

  type TableRowContext<R extends Row = Row> = {
    /**
     * Row data
     */
    row: R
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
     * true if element selected
     * @default false
     */
    isSelected: boolean
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

  interface TableColumn<R extends Row = Row> {
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
    render?: (cellContext: TableCellContext<R>, index: number) => React.ReactNode
    /**
     * Enables sorting for a column
     * support ASC | DESC
     */
    sort?: TableSortType | TableSortAsync
    /**
     * Primary key for mappings
     */
    primary?: boolean
  }

  interface RowEvents<R extends Row = Row> {
    /**
     * Calls when ever row selected
     */
    onCheckboxClick?: (
      rows: TableRowContext<R>[],
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => void
    /**
     * Calls when ever row clicked
     */
    onRowClick?: (
      rowCtxItem: TableRowContext<R>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    /**
     * Calls when row double-clicked
     */
    onRowDoubleClick?: (
      rowCtxItem: TableRowContext<R>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    /**
     * Calls when mouse enters row
     */
    onRowMouseEnter?: (
      rowCtxItem: TableRowContext<R>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
    /**
     * Calls when mouse leaves row
     */
    onRowMouseLeave?: (
      rowCtxItem: TableRowContext<R>,
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    ) => void
  }

  interface RowDelegates<R extends Row = Row> {
    /**
     * Delegate tells to TableRow what size it is.
     * Required when rowMountType not default
     */
    rowHeight?: (rowCtxItem: TableRowContext<R>) => number
    /**
     * Delegate tells TableRow render or not
     */
    rowShouldRender?: (rowCtxItem: TableRowContext<R>) => boolean
  }

  interface HeadCellProps<R extends Row = Row> {
    column: TableColumn<R>
    styles: ClassesType<Classes>
    toggleSort: (sort: TableSortObject) => Promise<unknown>
  }

  interface CellProps<R extends Row = Row> {
    rowCtxItem: TableRowContext<R>
    column: TableColumn<R>
    rowIndex: number
    styles: ClassesType<Classes>
    getCellContext: Methods<R>['getCellContext']
  }

  interface RowProps<R extends Row = Row> {
    rowCtxItem: TableRowContext<R>
    columns: TableColumn<R>[]
    rowIndex: number
    styles: ClassesType<Classes>
    getCellContext: Methods<R>['getCellContext']
    events: Record<string, React.MouseEventHandler<HTMLTableRowElement>>
    onCheckboxClick?: React.MouseEventHandler<HTMLDivElement>
    rowDidMount?: (rowCtxItem: TableRowContext<R>) => void
    rowDidUnmount?: (rowCtxItem: TableRowContext<R>) => void
    rowMountType?: Props<R>['rowMountType']
    enableRenderOptimization: boolean
    selectable: boolean
    delegates: {
      rowHeight?: Props<R>['rowHeight']
      rowShouldRender?: Props<R>['rowShouldRender']
    }
  }

  interface FootProps<R extends Row = Row> {
    rowCtx: TableRowContext<R>[]
    columns: TableColumn<R>[]
    footerContent?: Props<R>['footer']
    pagination?: TablePaginationOptions
    onPageChange: (pageNumber: number) => void
    styles: ClassesType<Classes>
  }
}

export default TableTypes
