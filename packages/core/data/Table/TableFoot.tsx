import React, { forwardRef } from 'react'

import { Flexbox, Pageswitch } from '@stage-ui/core'

import Types from './types'

function TableFoot(
  props: Types.FootProps,
  ref: React.ForwardedRef<HTMLTableCellElement>,
) {
  const { columns, pagination, rowCtx, styles, footerContent, onPageChange } = props
  const pageSize = pagination?.pageSize
  const alwaysVisible = pagination?.alwaysVisible

  let needDisplay = false
  const allowPagination = rowCtx.length > (pageSize || rowCtx.length) || alwaysVisible

  if (allowPagination || footerContent) {
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
            {allowPagination && (
              <Pageswitch
                length={rowCtx.length}
                onChange={onPageChange}
                {...pagination}
              />
            )}
          </Flexbox>
        </td>
      </tr>
    </tfoot>
  )
}

export default forwardRef(TableFoot)
