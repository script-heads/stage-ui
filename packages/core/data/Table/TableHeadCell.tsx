import React, { useState, forwardRef } from 'react'

import { Flexbox, Spinner } from '@stage-ui/core'
import { ChevronDown } from '@stage-ui/icons'

import Types from './types'

function TableHeadCell(
  props: Types.HeadCellProps,
  ref: React.ForwardedRef<HTMLTableDataCellElement>,
) {
  const { column, styles, toggleSort } = props
  const [busy, setBusy] = useState(false)
  const [up, setUp] = useState(column.sort === 'DESC')

  const onToggleSort = () => {
    setUp(!up)
    if (typeof column.sort === 'function') setBusy(true)
    toggleSort({
      key: column.key,
      sort: up ? 'ASC' : 'DESC',
    }).then(() => {
      if (typeof column.sort === 'function') setBusy(false)
    })
  }

  if (column.sort) {
    return (
      <th
        ref={ref}
        onClick={onToggleSort}
        css={styles.headCell({
          sort: typeof column.sort !== 'undefined',
        })}
      >
        <Flexbox alignItems="center">
          {column.title}
          {busy && <Spinner size="1rem" pl="xs" />}
          {!busy && column.sort && <ChevronDown ml="0.25rem" rotate={up ? 180 : 0} />}
        </Flexbox>
      </th>
    )
  }
  return (
    <th ref={ref} css={styles.headCell({ sort: false })}>
      {column.title}
    </th>
  )
}

export default forwardRef(TableHeadCell)
