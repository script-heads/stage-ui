import React, { useState, useEffect, FC, forwardRef } from 'react'
import createStyles from './styles'
import TableTypes from './types'

import TableRow from './TableRow'
import TableForm from './TableForm'
import TablePagination from './TablePagination'

import Icon from '../../content/Icon';
import Spinner from '../../content/Spinner';
import useContainer from '../../misc/hooks/useContainer';

const Table: FC<TableTypes.Props> = (props, ref) => {

    const { attributes } = useContainer(props);
    const { columns, actions, border, indexKey, scope, form, search, onRowClick, hideHeaders } = props;
    const styles = createStyles(props);

    const [page, setPage] = useState(1);
    const [pending, setPending] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    let { noDataLabel } = props;
    if (typeof noDataLabel === 'undefined') {
        noDataLabel = 'Нет данных'
    }
    let { data, pagination } = props
    let pageData = [] as Object[]

    const isData = (data && Array.isArray(data) && data.length > 0)

    if (!pagination) {
        pagination = {
            pageSize: 20
        }
    }

    useEffect(() => {
        if (searchValue.length > 0) {
            data = data.filter((row) =>
                Object.values(row).find(item => {
                    let searchbleItem = item && item.toString ? item.toString() : null
                    return searchbleItem && searchbleItem.toUpperCase().includes(searchValue.toUpperCase())
                })
            )
        }
    }, [searchValue])

    if (isData) {
        const { pageSize, async } = pagination
        if (!async) {
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации не async
             */
            pageData = data.filter((_, i) => pageSize * page >= (i + 1) && i >= pageSize * page - pageSize)
        } else {
            pageData = data;
        }
    }

    const isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined')

    const SearchBar = () => {
        if (searchBar || searchValue) {
            return (
                <div css={styles.search}>
                    <Icon type={i => i.outline.search} />
                    <input
                        value={searchValue}
                        onChange={(event) => {
                            props.onSearch
                                ? props.onSearch(event.target.value)
                                : setSearchValue(event.target.value)
                        }}
                        // onChange={(event) => console.log(event.target.value)}
                        placeholder='Найти'
                    />
                    <div onClick={() => {
                        setSearchBar(false);
                        setSearchValue('');
                        setPage(1);
                    }}><Icon type={i => i.outline.close} /></div>
                </div>
            )
        } else {
            return null
        }
    }

    const Columns = () => {
        if (isData && !isAddForm) {
            return columns.map(column => (
                <div
                    css={styles.headColumn}
                    key={column.dataIndex}
                    style={column.width ? { flexBasis: column.width } : { flex: 1 }}
                    children={column.title}
                />
            ))
        }
        if (isData) {
            return <div css={styles.headColumn} style={{ flex: 1 }}>Добавить</div>
        }
        return null
    }

    const AddForm = () => {
        if (typeof form != 'undefined' && typeof form.key === 'undefined') {
            return TableForm({ Form: form.render, dismiss: form.dismiss, columns, defaultData: form.defaultData });
        }
        return null;
    }

    return (
        <div ref={ref} css={styles.container} {...attributes}>
            <div css={styles.content}>
                {!hideHeaders && (
                    <div css={styles.headRow}
                        style={actions && { marginRight: '2rem' }}
                        children={Columns()}
                    />
                )}

                <div css={styles.body}>
                    <SearchBar />
                    <AddForm />
                    {
                        isData && pageData.map((row, index) => {
                            const key = indexKey && row[indexKey] || index.toString()
                            return (
                                <TableRow
                                    key={key}
                                    row={row}
                                    columns={columns}
                                    actions={actions}
                                    border={border}
                                    form={(form && form.key && key == form.key) && form}
                                    isSelected={(selectedItems.some(item => item === key))}
                                    isExpanding={(expandedItems.some(item => item === key))}
                                    isBlur={((form && form.key && key != form.key) || isAddForm)}
                                    scope={scope}
                                    onRowClick={onRowClick}
                                    style={{
                                        opacity: pending ? 0.2 : 1
                                    }}
                                    styles={styles}
                                />
                            )
                        })
                    }
                    {pending && (
                        <Spinner />
                    )}
                    {(!isData && !search) && <div style={{ padding: '1.25rem' }}>{noDataLabel}</div>}
                    {(search && data.length === 0) && <div style={{ padding: '1.25rem' }}>Ничего не найдено</div>}
                </div>

            </div>
            {isData && data && (
                <TablePagination
                    pagination={pagination!}
                    page={page}
                    searchActive={searchBar || searchValue.length > 0}
                    search={props.search}
                    data={data}
                    onChange={async (page, searchBar) => {
                        setPage(page);
                        setSearchBar(searchBar);
                        if (props.pagination && props.pagination.async) {
                            setPending(true);
                            await props.pagination.async(page);
                            setPending(false);
                        }
                    }}
                    styles={styles}
                />
            )}
        </div>
    )
}
export default forwardRef(Table)