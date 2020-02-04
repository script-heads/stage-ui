import React, { RefForwardingComponent, useMemo } from 'react'
import Types from './types'

const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps> = (props, ref) => {

    const { 
        decoration = 'underline',
        className,
        size = 'm',
        shape = 'rounded',
        content, 
        disabled = false,
        active = false,
        onClick,
    } = props
    return (
        <div
            //@ts-ignore
            active={active ? 'true' : undefined}
            disabled={disabled}
            style={props.style}
            className={className}
            onClick={onClick}
            css={props.styles.item({active, disabled, decoration, shape, size})}
            tabIndex={disabled ? -1 : 0}
        >
            <div id="item-content">{content}</div>
        </div>
    )
}

export default Item