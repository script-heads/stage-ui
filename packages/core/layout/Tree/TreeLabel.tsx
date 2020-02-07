import React from 'react'
import { Text } from '../..'
import Types from './types'

const TreeLabel = (props: Types.TreeLabelProps) => {
    let { size, options, children, className } = props

    if (typeof children === 'string') {
        children = (
            <Text
                size={size}
                className={className}
                children={children}
            />
        )
    }
    if (typeof children === 'function') {
        children = children(options)
    }
    return (
        <>
            {children}
        </>
    )
}

export default TreeLabel