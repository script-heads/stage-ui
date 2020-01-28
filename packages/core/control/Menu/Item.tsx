import React, { RefForwardingComponent } from 'react'
import Types from './types'

const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps> = (props, ref) => {

    const { 
        decoration = 'underline',
        size = 'm',
        shape = 'rounded',
        content, 
        disabled = false,
        active 
    } = props

    return (
        <div
            {...props}
            //@ts-ignore
            active={active ? 'true' : ''}
            disabled={disabled}
            style={props.style}
            css={props.styles.item({active, disabled, decoration, shape, size})}
            tabIndex={disabled ? -1 : 0}
        >
            <div id="item-content">{content}</div>
        </div>
    )
}

export default Item