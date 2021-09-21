import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Typography from '@stage-ui/core/basic/Typography'
import sizeProp from '@stage-ui/system/props/size'
import isFunction from '@stage-ui/system/utils/isFunction'
import Types from './types'

const Header: ForwardRefRenderFunction<HTMLSpanElement, Types.Props> = (
  { overrides, ...props },
  ref,
) => (
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
    overrides={(theme, styleProps) => ({
      container: [
        {
          fontWeight: 'bold',
          display: 'block',
        },
        isFunction(overrides) ? overrides(theme, styleProps).container : overrides?.container,
      ],
    })}
    ref={ref}
    size="m"
    {...props}
  />
)

export default forwardRef(Header)
