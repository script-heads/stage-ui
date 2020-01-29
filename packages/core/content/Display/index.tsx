import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '../../misc/hocs/Typography'
import Types from '../../misc/hocs/Typography/types'

const Display: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props, ref) =>
    <Typography 
        tag="span" 
        sizesOf="display"
        specificStyles={{
            display: 'block'
        }}  
        ref={ref} 
        size="m"
        {...props}
    />

export default forwardRef(Display)