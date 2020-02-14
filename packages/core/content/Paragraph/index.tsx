import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '@flow-ui/core/misc/hocs/Typography'
import Types from '@flow-ui/core/misc/hocs/Typography/types'

const Parapraph: RefForwardingComponent<HTMLParagraphElement, Types.Props> = (props, ref) =>
    <Typography 
        tag="p" 
        sizesOf="paragraph"  
        ref={ref} 
        size="m"
        {...props}
    />

export default forwardRef(Parapraph)