import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Typography from '@stage-ui/core/basic/Typography'
import isFunction from '@stage-ui/system/utils/isFunction'
import Types from './types'

const Link: ForwardRefRenderFunction<HTMLAnchorElement, Types.Props> = (
  { overrides, ...props },
  ref,
) => {
  return (
    <Typography
      tag="a"
      sizesOf="text"
      name="Link"
      overrides={(theme, styleProps) => ({
        container: [
          {
            outline: 'none',
            color: theme.color.primary.rgb().string(),
            textDecoration: 'unset',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          isFunction(overrides) ? overrides(theme, styleProps).container : overrides?.container,
        ],
      })}
      ref={ref}
      {...props}
    />
  )
}

export default forwardRef(Link)
