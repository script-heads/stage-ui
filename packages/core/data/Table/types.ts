import Global from "../../types";
import { Interpolation } from "@emotion/core";

declare namespace TableTypes {
    export interface TableColumn {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => void
    }

    export interface TableActions {
        label: string
        className?: string
        onAction: (row) => void
    }

    export interface TableForm {
        key?: string | number
        defaultData?: { [key: string]: any }
        render: any
        dismiss?: () => void
    }

    export interface Props extends Global.Props {
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

    export interface RowProps {
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
        styles: any
    }

    export interface ColumnProps {
        row: any
        columns: TableColumn[]
        scope?: any
        children?: any
        styles: any
    }

    export interface ActionsProps {
        actions: any[]
        data: any
        children?: any
        styles: any
    }

    export interface FormProps {
        data: any
        dismiss?: () => void
        columns: TableColumn[]
        Form: any
        children?: any
    }

    export interface InjectForm {
        data: { [key: string]: any }
        columns: TableColumn[]
        setData: (key: string, value: any) => void
        dismiss?: () => void
    }

    export interface TablePagination {
        pageSize: number
        pageTotalSize?: number
        async?: (page: number) => boolean
    }

    export interface PaginationProps {
        pagination: TablePagination
        page: number
        searchActive: boolean
        search?: boolean
        data: { [key: string]: any }[]
        onChange: (page: number, searchBar: boolean) => void
        children?: any
        styles: any
    }

    export interface Overrides {
        container: Interpolation
        content: Interpolation
        headRow: Interpolation
        headColumn: Interpolation
        search: Interpolation
        body: Interpolation
        pagination: Interpolation
        paginationButton: Interpolation
        row: Interpolation
        subrow: Interpolation
        column: Interpolation
        more: Interpolation
        actions: Interpolation
        actionButtons: Interpolation
        actionButtonsEdit: Interpolation
    }
}

export default TableTypes;