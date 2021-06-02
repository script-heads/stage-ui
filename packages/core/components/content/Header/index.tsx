import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Typography from '@stage-ui/core/misc/hocs/Typography'
import sizeProp from '@stage-ui/system/props/size'
import Types from './types'

const Header: ForwardRefRenderFunction<HTMLSpanElement, Types.Props> = (props, ref) => (
  <Typography
    tag={sizeProp(
      props.size,
      {
        xl: 'h1',
        l: 'h2',
        m: 'h3',
        s: 'h4',
        xs: 'h5',
      },
      () => 'h1',
    )}
    sizesOf="header"
    name="Header"
    css={{
      fontWeight: 'bold',
      display: 'block',
    }}
    ref={ref}
    size="m"
    {...props}
  />
)

export default forwardRef(Header)
