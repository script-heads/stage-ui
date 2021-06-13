import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Typography from '@stage-ui/core/basic/Typography'
import Types from './types'

const Text: ForwardRefRenderFunction<HTMLSpanElement, Types.Props> = (props, ref) => (
  <Typography tag="span" name="Text" sizesOf="text" ref={ref} size="m" {...props} />
)

export default forwardRef(Text)
