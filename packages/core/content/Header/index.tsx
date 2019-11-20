import React, { forwardRef } from 'react'
import Types from '../../misc/hocs/Typography/types'
import Typography from '../../misc/hocs/Typography'

const Header = (props: Types.Props, ref) =>
    <Typography 
        tag="span" 
        sizesOf="header"
        specificStyles={{
            fontWeight: 700,
            display: 'block' 
        }}  
        ref={ref} 
        {...props}
    />

export default forwardRef(Header)