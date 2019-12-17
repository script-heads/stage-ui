import Shared from '@flow-ui/core/types'

declare namespace TableTypes {
    interface TableColumn {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => void
    }

    interface TableActions {
        label: string
        className?: string
        onAction: (row) => void
    }

    interface TableForm {
        key?: string | number
        defaultData?: { [key: string]: any }
        render: any
        dismiss?: () => void
    }

    interface Props extends Shared.AllProps {
        data: Object[]
        columns: TableColumn[]
        form?: TableForm
        actions?: TableActions[]
        border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal'
        indexKey?: string
        scope?: any
        pagination?: TablePagination
        noDataLabel?: string
        children?: React.ReactElement
        onRowClick?: (row: any) => void
        search?: boolean
        onSearch?: (value: any) => void
        hideHeaders?: boolean
        className?: string
    }

    interface RowProps {
        row: any
        columns: TableColumn[]
        isSelected?: boolean
        isExpanding?: boolean
        isBlur?: boolean
        actions?: any
        border?: any
        scope?: any
        form?: any
        style?: any
        children?: any
        onRowClick?: (row) => void
        styles: Shared.FlowStyles<Overrides>
    }

    interface ColumnProps {
        row: any
        columns: TableColumn[]
        scope?: any
        children?: any
        styles: Shared.FlowStyles<Overrides>
    }

    interface ActionsProps {
        actions: any[]
        data: any
        children?: any
        styles: Shared.FlowStyles<Overrides>
    }

    interface FormProps {
        data: any
        dismiss?: () => void
        columns: TableColumn[]
        Form: any
        children?: any
    }

    interface InjectForm {
        data: { [key: string]: any }
        columns: TableColumn[]
        setData: (key: string, value: any) => void
        dismiss?: () => void
    }

    interface TablePagination {
        pageSize: number
        pageTotalSize?: number
        async?: (page: number) => boolean
    }

    interface PaginationProps {
        pagination: TablePagination
        page: number
        searchActive: boolean
        search?: boolean
        data: { [key: string]: any }[]
        onChange: (page: number, searchBar: boolean) => void
        children?: any
        styles: Shared.FlowStyles<Overrides>
    }

    interface Overrides {
        container: void
        content: void
        headRow: void
        headColumn: void
        search: void
        body: void
        pagination: void
        paginationButton: {
            active: boolean
        }
        row: {
            edited: boolean
            withActions: boolean
        }
        subrow: void
        column: void
        more: void
        actions: void
        actionButtons: void
        actionButtonsEdit: void
    }
}

export default TableTypes