import React, { forwardRef } from 'react'
import Types from '../../misc/hocs/Typography/types'
import Typography from '../../misc/hocs/Typography'

const Text = (props: Types.Props, ref) =>
    <Typography 
        tag="span" 
        sizesOf="text"
        ref={ref} 
        {...props}
    />

export default forwardRef(Text)