import { ArrowIosForward } from '@flow-ui/core/icons'
import React, { Fragment } from 'react'
import Types from './types'

const TreeLeftChild = (props: Types.TreeLeftChildProps) => {
    let { options, children, className } = props
    
    if (typeof children === 'function') {
        children = children(options)
    }
    return (
        <Fragment>
            {children !== undefined ? children : (
                <ArrowIosForward
                    rotate={options.isOpen ? 90 : 0}
                    className={className}
                />
            )}
        </Fragment>
    )
}

export default TreeLeftChild