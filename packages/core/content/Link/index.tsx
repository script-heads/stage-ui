import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import Typography from '@stage-ui/core/basic/Typography'
import { isFunction } from '@stage-ui/system'

import Types from './types'

const Link: ForwardRefRenderFunction<HTMLAnchorElement, Types.Props> = (
  { overrides, ...props },
  ref,
) => (
  <Typography
    tag="a"
    color="primary"
    sizesOf="text"
    name="Link"
    focus="tabOnly"
    overrides={(theme, styleProps) => ({
      container: [
        {
          outline: 'none',
          textDecoration: 'unset',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        isFunction(overrides)
          ? overrides(theme, styleProps).container
          : overrides?.container,
      ],
    })}
    ref={ref}
    {...props}
  />
)

export default forwardRef(Link)
