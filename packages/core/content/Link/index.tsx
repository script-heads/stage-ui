import React, { forwardRef, RefForwardingComponent } from 'react'
import { useTheme } from '@flow-ui/core'
import Typography from '@flow-ui/core/misc/hocs/Typography'
import Types from '@flow-ui/core/misc/hocs/Typography/types'

const Link: RefForwardingComponent<HTMLAnchorElement, Types.LinkProps> = (props, ref) => {
    const theme = useTheme()
    
    return (
        <Typography
            tag="a"
            tabIndex={props.tabIndex || 0}
            sizesOf="text"
            specificStyles={{
                outline: 'none',
                color: theme.color.primary.hex(),
                textDecoration: 'unset',
                '&:hover': {
                    textDecoration: 'underline'
                },
            }}
            ref={ref}
            {...props}
        />
    )
}

export default forwardRef(Link)