import React, { forwardRef } from 'react'
import Types from '../../misc/hocs/Typography/types'
import Typography from '../../misc/hocs/Typography'

const Display = (props: Types.Props, ref) =>
    <Typography 
        tag="span" 
        sizesOf='display'
        specificStyles={{
            display: 'block'
        }}  
        ref={ref} 
        {...props}
    />

export default forwardRef(Display)