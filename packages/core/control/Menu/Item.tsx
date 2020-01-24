import React, { FC } from 'react'
import MenuTypes from './types'

const Item: FC<MenuTypes.ItemProps> = (props) => {

    const { 
        decoration = 'underline',
        size = 'medium',
        shape = 'rounded',
        content, 
        disabled = false,
        active } = props

    return (
        <div
            {...props}
            css={props.styles.item({active, disabled, decoration, shape, size})}
            disabled={disabled}
            tabIndex={disabled ? -1 : 0}
        >
            <div id="item-content">{content}</div>
        </div>
    )
}

export default Item