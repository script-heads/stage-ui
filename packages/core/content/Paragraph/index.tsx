import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '../../misc/hocs/Typography'
import Types from '../../misc/hocs/Typography/types'

const Parapraph: RefForwardingComponent<HTMLParagraphElement, Types.Props> = (props, ref) =>
    <Typography 
        tag="p" 
        sizesOf="paragraph"  
        ref={ref} 
        {...props}
    />

export default forwardRef(Parapraph)