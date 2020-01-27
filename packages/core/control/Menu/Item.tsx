import React, { RefForwardingComponent } from 'react'
import Types from './types'

const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps> = (props, ref) => {

    const { 
        decoration = 'underline',
        size = 'medium',
        shape = 'rounded',
        content, 
        disabled = false,
        active 
    } = props

    return (
        //@ts-ignore
        <div
            //@ts-ignore
            {...props}
            css={props.styles.item({active, disabled, decoration, shape, size})}
            tabIndex={disabled ? -1 : 0}
        >
            <div id="item-content">{content}</div>
        </div>
    )
}

export default Item