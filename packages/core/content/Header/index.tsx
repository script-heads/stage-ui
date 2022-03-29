import React, { forwardRef } from 'react'

import Typography from '@stage-ui/core/basic/Typography'
import sizeProp from '@stage-ui/system/props/size'
import isFunction from '@stage-ui/system/utils/isFunction'

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
          l: 'h1',
          m: 'h1',
          s: 'h2',
          xs: 'h3',
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
