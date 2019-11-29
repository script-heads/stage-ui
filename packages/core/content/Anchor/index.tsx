import React, { forwardRef } from 'react'
import Types from '../../misc/hocs/Typography/types'
import Typography from '../../misc/hocs/Typography'
import { useFlow } from '../..'

const Anchor = (props: Types.AnchorProps, ref) => {
    const {theme} = useFlow()
    
    return (
        <Typography
            tabIndex={props.tabIndex || (props.onClick || props.onEnter) && 0}
            tag="a"
            sizesOf="text"
            specificStyles={{
                color: theme.color.primary.css(),
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