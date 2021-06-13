import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Typography from '@stage-ui/core/basic/Typography'
import Types from './types'

const Parapraph: ForwardRefRenderFunction<HTMLParagraphElement, Types.Props> = (props, ref) => (
  <Typography tag="p" name="Paragraph" sizesOf="paragraph" ref={ref} size="m" {...props} />
)

export default forwardRef(Parapraph)
