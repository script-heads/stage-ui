import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '@flow-ui/core/misc/hocs/Typography'
import Types from '@flow-ui/core/misc/hocs/Typography/types'

const Text: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props, ref) =>
    <Typography 
        tag="span" 
        sizesOf="text"
        ref={ref} 
        size="m"
        {...props}
    />

export default forwardRef(Text)