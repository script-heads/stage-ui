import React, { forwardRef, RefForwardingComponent } from 'react'
import { useTheme } from '../..'
import Typography from '../../misc/hocs/Typography'
import Types from '../../misc/hocs/Typography/types'

const Anchor: RefForwardingComponent<HTMLAnchorElement, Types.AnchorProps> = (props, ref) => {
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

export default forwardRef(Anchor)