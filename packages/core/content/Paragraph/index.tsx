import React, { forwardRef } from 'react'
import Types from '../../misc/hocs/Typography/types'
import Typography from '../../misc/hocs/Typography'

const Parapraph = (props: Types.Props, ref) =>
    <Typography 
        tag="p" 
        sizesOf='paragraph'  
        ref={ref} 
        {...props}
    />

export default forwardRef(Parapraph)