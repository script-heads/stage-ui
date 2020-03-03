import React, { forwardRef, RefForwardingComponent } from 'react'
import Typography from '@flow-ui/core/misc/hocs/Typography'
import Types from '@flow-ui/core/misc/hocs/Typography/types'

const Header: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props, ref) =>
    <Typography 
        tag={
            {
                'xl': 'h1',
                'l': 'h2',
                'm': 'h3',
                's': 'h4',
                'xs': 'h5',
            }[props.size || 'm']
        } 
        sizesOf="header"
        specificStyles={{
            fontWeight: 700,
            display: 'block'
        }}  
        ref={ref} 
        size="m"
        {...props}
    />

export default forwardRef(Header)