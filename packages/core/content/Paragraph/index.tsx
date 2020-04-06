import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '@stage-ui/core/misc/hocs/Typography'
import Types from './types'

const Parapraph: RefForwardingComponent<HTMLParagraphElement, Types.Props> = (props, ref) =>
    <Typography
        tag="p"
        sizesOf="paragraph"
        ref={ref}
        size="m"
        {...props}
    />

export default forwardRef(Parapraph)