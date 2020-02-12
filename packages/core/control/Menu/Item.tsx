import React, { RefForwardingComponent, useMemo } from 'react'
import Types from './types'

let Content = (props: { children: React.ReactNode }) => {
    return (
        <div id="item-content">{props.children}</div>
    )
}

const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps> = (props, ref) => {

    const {
        decoration = 'underline',
        className,
        size = 'm',
        shape = 'rounded',
        disabled = false,
        active = false,
        onClick,
    } = props

    const children = useMemo(() => (
        <div id="item-content">{props.content}</div>
    ), [props.content])

    return (
        <div
            //@ts-ignore
            active={active ? 'true' : undefined}
            disabled={disabled}
            style={props.style}
            className={className}
            onClick={onClick}
            css={props.styles.item({ active, disabled, decoration, shape, size })}
            tabIndex={disabled ? -1 : 0}
            children={children}
        />
    )
}

export default Item