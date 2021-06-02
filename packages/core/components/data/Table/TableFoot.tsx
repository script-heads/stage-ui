/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Pageswitch } from '@stage-ui/core'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import Types from './types'

const TableFoot: ForwardRefRenderFunction<HTMLTableCellElement, Types.FootProps<any>> = (props, ref) => {
  const { columns, pagination, rowCtx, styles, footerContent, onPageChange } = props

  let needDisplay = false
  const paginationNeedDisplay = pagination && (pagination.alwaysVisible || rowCtx.length > pagination.pageSize)

  if (paginationNeedDisplay || footerContent) {
    needDisplay = true
  }
  if (!needDisplay) {
    return null
  }

  return (
    <tfoot>
      <tr>
        <td ref={ref} css={styles.footer} colSpan={columns.length}>
          <Flexbox justifyContent={footerContent ? 'space-between' : 'flex-end'}>
            {footerContent}
            {paginationNeedDisplay && <Pageswitch length={rowCtx.length} onChange={onPageChange} {...pagination} />}
          </Flexbox>
        </td>
      </tr>
    </tfoot>
  )
}

export default forwardRef(TableFoot)
