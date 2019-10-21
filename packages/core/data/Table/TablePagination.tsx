import React from 'react';
import TableTypes from './types';

const TablePagination = (props: TableTypes.PaginationProps) => {
    const { data, page, searchActive, search, onChange } = props;
    const { pageSize, pageTotalSize } = props.pagination;
    const buttons = Math.ceil((pageTotalSize || data.length) / pageSize);
    const styles = props.styles;

    if (buttons <= 1 && !search) {
        return null;
    }

    let childs: JSX.Element[] = props.search ? [(
        <div key="pagination"
            onClick={() => onChange(1, true)}
            css={styles.paginationButton({active: searchActive})}
            children={`Найти`}
        />
    )] : [];

    for (let i = 0; i < buttons; i++) {
        childs.push(
            <div
                key={i}
                onClick={() => onChange(i + 1, false)}
                css={styles.paginationButton({active: page === (i + 1)})}
                children={`${i * pageSize + 1}–${i * pageSize + pageSize}`}
            />
        )
    }

    return <div css={styles.pagination} children={childs} />
}
export default TablePagination;