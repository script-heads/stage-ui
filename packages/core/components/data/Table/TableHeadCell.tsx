import { Flexbox, Spinner } from '@stage-ui/core'
import { ArrowDown } from '@stage-ui/icons'
import { useState, forwardRef, ForwardRefRenderFunction } from 'react'
import Types from './types'

const TableHeadCell: ForwardRefRenderFunction<HTMLTableDataCellElement, Types.HeadCellProps<any>> = (props, ref) => {
  const { column, styles } = props
  const [busy, setBusy] = useState(false)
  const [up, setUp] = useState(column.sort === 'DESC')

  const toggleSort = () => {
    setUp(!up)
    typeof column.sort === 'function' && setBusy(true)
    props
      .toggleSort({
        key: column.key,
        sort: up ? 'ASC' : 'DESC',
      })
      .then(() => {
        typeof column.sort === 'function' && setBusy(false)
      })
  }

  if (column.sort) {
    return (
      <th
        ref={ref}
        onClick={toggleSort}
        css={styles.headCell({
          sort: typeof column.sort !== 'undefined',
        })}
      >
        <Flexbox alignItems="center">
          {column.title}
          {busy && <Spinner size="1rem" pl="xs" />}
          {!busy && column.sort && <ArrowDown ml="0.25rem" rotate={up ? 180 : 0} />}
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
