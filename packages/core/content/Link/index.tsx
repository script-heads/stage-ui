import React, { forwardRef, RefForwardingComponent } from 'react'
import { useTheme } from '@flow-ui/core'
import Typography from '@flow-ui/core/misc/hocs/Typography'
import Types from '@flow-ui/core/misc/hocs/Typography/types'

const Link: RefForwardingComponent<HTMLAnchorElement, Types.LinkProps> = (props, ref) => {
    const theme = useTheme()
    
    return (
        <Typography
            tabIndex={props.tabIndex || (props.onClick || props.onEnter) && 0}
            tag="a"
            sizesOf="text"
            specificStyles={{
                color: theme.color.primary,
                '&:hover': {
                    textDecoration: 'underline'
                },
                cursor: 'pointer'
            }}
            ref={ref}
            {...props}
        />
    )
}

export default forwardRef(Link)