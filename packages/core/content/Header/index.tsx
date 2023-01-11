import React, { forwardRef } from 'react'

import Typography from '@stage-ui/core/basic/Typography'
import { sizeProp, isFunction } from '@stage-ui/system'

import Types from './types'

function Header(
  { overrides, ...props }: Types.Props,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
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
          isFunction(overrides)
            ? overrides(theme, styleProps).container
            : overrides?.container,
        ],
      })}
      ref={ref}
      size="m"
      {...props}
    />
  )
}

export default forwardRef(Header)
